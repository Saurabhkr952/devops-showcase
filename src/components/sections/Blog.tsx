import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Tag } from "lucide-react";

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  tag_list: string[];
  cover_image: string | null;
  reading_time_minutes: number;
}

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=saurabhkr&per_page=6")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Latest <span className="text-gradient">Blog Posts</span>
          </h2>
          <p className="text-muted-foreground">
            From{" "}
            <a
              href="https://dev.to/saurabhkr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Dev.to
            </a>
          </p>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[1, 2, 3].map((n) => (
              <div key={n} className="glass rounded-2xl p-5 animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4 mb-3" />
                <div className="h-3 bg-muted rounded w-full mb-2" />
                <div className="h-3 bg-muted rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : articles.length === 0 ? (
          <p className="text-center text-muted-foreground">No articles found.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {articles.map((article, i) => (
              <motion.a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 group hover:shadow-glow transition-all"
              >
                <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {article.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={10} />
                    {new Date(article.published_at).toLocaleDateString()}
                  </span>
                  <span>{article.reading_time_minutes} min read</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {article.tag_list.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary">
                      #{tag}
                    </span>
                  ))}
                </div>
                <ExternalLink size={12} className="mt-3 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;

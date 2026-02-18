import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import WorkExperience from "@/components/sections/WorkExperience";
import Projects from "@/components/sections/Projects";
import OpenSource from "@/components/sections/OpenSource";
import Certifications from "@/components/sections/Certifications";
import Resume from "@/components/sections/Resume";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Skills />
      <WorkExperience />
      <Projects />
      <OpenSource />
      <Certifications />
      <Resume />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

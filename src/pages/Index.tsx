import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />

      <Projects />
      <Skills />
      <Contact />

      <footer className="py-8 text-center text-muted-foreground border-t border-primary/20">
        <p className="bg-gradient-primary bg-clip-text text-transparent font-semibold">
          &copy; 2025 Ayush Kumar. Built with ♥
        </p>
      </footer>
    </div>
  );
};

export default Index;

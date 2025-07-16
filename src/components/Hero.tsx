import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Profile Image with circular border and glow effect */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-primary p-1 shadow-glow-primary animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl md:text-9xl">
                    <img src="/Ayush.jpg" alt="Ayush" />
                  </div>
                </div>
              </div>
              {/* Floating elements around profile */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Ayush Kumar
          </h1>
          <p className="text-xl md:text-3xl text-primary font-semibold mb-4 animate-fade-in">
            Full Stack Developer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
            Passionate about creating innovative web solutions with modern
            technologies. I transform ideas into reality through clean code and
            exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection("projects")}
            >
              View My Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary hover:bg-primary/10 hover:shadow-glow-secondary transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection("about")}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center gap-8 animate-fade-in">
            <a
              href="https://github.com/Ayush8566"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 hover:shadow-glow-secondary"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-kumar-9884b8262/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 hover:shadow-glow-secondary"
            >
              <Linkedin size={28} />
            </a>

            <a
              href="https://www.instagram.com/ayush_maurya14/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 hover:shadow-glow-secondary"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://x.com/Ayushkumar56848/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 hover:shadow-glow-secondary"
            >
              <Twitter size={28} />
            </a>

            <a
              href="mailto:kumarayush59567@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 hover:shadow-glow-secondary"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary/80 transition-all duration-300 animate-bounce hover:scale-110"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

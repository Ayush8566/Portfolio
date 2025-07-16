import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, Eye } from "lucide-react";

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "HavenLuxe",
      description:
        "A full-stack real estate marketplace allowing users to browse, list, and filter properties. Includes secure authentication and a responsive UI.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
      ],
      github: "https://github.com/Ayush8566/HavenLux_",
      live: "https://havenlux-71bg.onrender.com/",
      image: "🏡",
      status: "Completed",
    },
    {
      title: "SpeakBridge",
      description:
        "A real-time chat and communication app with text, voice, and video calling support, built using GetStream.io and WebRTC.",
      technologies: [
        "React",
        "Node.js",
        "WebRTC",
        "Socket.io",
        "MongoDB",
        "GetStream.io",
      ],
      github: "https://github.com/Ayush8566/SpeakBridge",
      live: "https://speakbridge.onrender.com/",
      image: "🗣️",
      status: "Completed",
    },
    {
      title: "Weather App",
      description:
        "A weather forecasting app providing real-time weather data based on user's location, using the OpenWeather API.",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      github: "https://github.com/Ayush8566/Weather_App",
      live: "https://ayush8566.github.io/Weather_App/",
      image: "🌦️",
      status: "Completed",
    },
    {
      title: "Bank Management System (C++)",
      description:
        "A command-line banking system developed in C++ to manage customer accounts, perform transactions, and generate reports.",
      technologies: ["C++", "OOP", "File Handling"],
      github: "https://github.com/Ayush8566/MiniBank",
      live: "https://github.com/Ayush8566/MiniBank",
      image: "🏦",
      status: "Completed",
    },
    // Existing projects
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Progress":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-background to-secondary/30"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Some of my recent work that showcases my skills and passion for
              development
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`overflow-hidden transition-all duration-500 cursor-pointer border-primary/20 animate-fade-in group ${
                  hoveredProject === index
                    ? "transform scale-105 shadow-glow-primary border-primary/40"
                    : "hover:shadow-lg"
                }`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                    <Badge
                      variant="outline"
                      className={`${getStatusColor(project.status)} border`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <CardTitle className="text-xl text-primary group-hover:text-primary/80 transition-colors">
                    {project.title}
                  </CardTitle>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1"></div>
                    <div className="flex items-center gap-1"></div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:shadow-glow-secondary transition-all duration-300"
                      asChild
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button
              size="lg"
              variant="outline"
              className="border-primary hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a
                href="https://github.com/Ayush8566/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View More Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

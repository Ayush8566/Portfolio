import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: [
       "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        "Node.js",
      "Express",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "REST APIs"
      ],
      color: "from-green-500 to-emerald-500",
    },

    {
      title: "Languages",
      icon: Code,
      skills: [
       "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C++",
      "C",
      "Rust",
      "SQL",
      "NoSQL",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-secondary/20 to-background"
    >
      <div className="container mx-auto px-3">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground">
              The technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-primary/20 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-primary">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Section */}
          <div className="mt-16 text-center animate-fade-in">
            <h3 className="text-2xl font-semibold mb-8 text-primary">
              Additional Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-medium">Web Development</h4>
                <p className="text-muted-foreground">
                  Responsive design, PWAs, Performance optimization
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-medium">API Development</h4>
                <p className="text-muted-foreground">
                  RESTful APIs, GraphQL, Microservices architecture
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

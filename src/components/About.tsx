import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Code, Palette, Zap, Mail, Phone, MapPin } from "lucide-react";

export const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `);

    const mailtoLink = `mailto:kumarayush59567@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success toast
    toast({
      title: "Email client opened!",
      description:
        "Your message has been prepared. Please send it from your email client.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "I write maintainable, scalable code that follows best practices and industry standards.",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description:
        "I create beautiful, responsive designs that provide exceptional user experiences.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "I optimize for speed and efficiency, ensuring fast load times and smooth interactions.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-secondary/20 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate full-stack developer with expertise in modern web
              technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Hi, I'm Ayush Kumar
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  I'm a passionate  and innovative Computer
                  Science Engineer with a strong foundation in full-stack web
                  development and a growing expertise in modern technologies
                  like React, Node.js, MongoDB, and Express. I enjoy building
                  responsive, user-friendly web applications that are both
                  practical and elegant.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Currently pursuing my B.Tech at Siksha 'O' Anushanshan
                  University, I’ve worked on a variety of real-world projects,
                  including HavenLuxe (a real estate marketplace). I also have
                  experience building backend logic in C++, such as a
                  command-line Bank Management System.
                </p>
                <p className="text-lg text-muted-foreground">
                  Beyond coding, I love exploring new tools, contributing to
                  open-source when I can, and learning technologies that help
                  solve real-world problems — from web to AI, and everything in
                  between.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>kumarayush59567@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Available for remote work</span>
                </div>
              </div>
            </div>

            {/* Get in Touch Form */}
            <Card className="shadow-lg border-primary/20 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Get In Touch
                </CardTitle>
                <p className="text-muted-foreground">
                  Let’s work together to make it happen.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-primary/30 focus:border-primary"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-primary/30 focus:border-primary"
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-primary/30 focus:border-primary"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="min-h-[120px] border-primary/30 focus:border-primary"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-primary/20"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <highlight.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

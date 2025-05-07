
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import { Code, Smartphone, Star, Banknote, TrendingUp } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  icon: React.ElementType;
  demoUrl: string;
  repoUrl: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web solutions tailored to your business needs with responsive design and seamless user experience.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&q=80&fit=crop&w=800&h=500",
      icon: Code,
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      id: 2,
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on any device.",
      tags: ["React Native", "Flutter", "Swift", "Kotlin"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&q=80&fit=crop&w=800&h=500",
      icon: Smartphone,
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      id: 3,
      title: "Celebrity Management",
      description: "Comprehensive digital solutions for celebrity brand management, social media presence, and fan engagement.",
      tags: ["Social Media", "Brand Strategy", "Content Creation", "Analytics"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&q=80&fit=crop&w=800&h=500",
      icon: Star,
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      id: 4,
      title: "Online Banking",
      description: "Secure and user-friendly digital banking solutions with robust security features and intuitive interfaces.",
      tags: ["Security", "Payment Processing", "User Authentication", "Transactions"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&q=80&fit=crop&w=800&h=500",
      icon: Banknote,
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      id: 5,
      title: "Investment Platform",
      description: "Data-driven investment solutions with real-time analytics, portfolio management, and market insights.",
      tags: ["Data Visualization", "Financial API", "Portfolio Tracking", "Risk Analysis"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&q=80&fit=crop&w=800&h=500",
      icon: TrendingUp,
      demoUrl: "#",
      repoUrl: "#"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <section className="section">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Providing cutting-edge solutions across various domains with focus on quality, 
            innovation and exceptional user experience.
          </p>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={item}>
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/30 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-primary/90 p-2 rounded-full text-primary-foreground z-20">
                      <project.icon size={24} />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span>{project.title}</span>
                    </CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="default" size="sm" asChild className="flex-1">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Learn More</a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Portfolio</a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;

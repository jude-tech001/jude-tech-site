
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with React and TypeScript",
      excerpt: "A comprehensive guide for beginners on how to set up and use React with TypeScript.",
      date: "Apr 15, 2024",
      readTime: "5 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&q=80&fit=crop&w=800&h=500"
    },
    {
      id: 2,
      title: "The Future of Web Development: What's Coming in 2025",
      excerpt: "Exploring upcoming trends, technologies, and best practices in web development for the next year.",
      date: "Mar 30, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&q=80&fit=crop&w=800&h=500"
    },
    {
      id: 3,
      title: "Optimizing Front-End Performance: Tips and Tricks",
      excerpt: "Learn how to significantly improve the performance of your web applications with these techniques.",
      date: "Mar 21, 2024",
      readTime: "6 min read",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&q=80&fit=crop&w=800&h=500"
    },
    {
      id: 4,
      title: "Building Accessible Web Applications",
      excerpt: "Why accessibility matters and how to implement it in your projects from the start.",
      date: "Mar 12, 2024",
      readTime: "8 min read",
      category: "Accessibility",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&q=80&fit=crop&w=800&h=500"
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
          <h1 className="text-3xl md:text-4xl font-bold mb-10">Blog</h1>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={item}>
                <Card className="h-full flex flex-col overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1"></CardContent>
                  <CardFooter>
                    <Button variant="default" size="sm">Read Article</Button>
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

export default Blog;

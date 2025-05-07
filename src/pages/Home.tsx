
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-8">
                <div className="relative w-60 h-60">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-full"
                  >
                    <img 
                      src="/lovable-uploads/4ee2de0b-6018-45cf-8550-4a8703a523ca.png" 
                      alt="JUDE-TECH Logo" 
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Hello, I'm <span className="text-primary">Jude Samuel</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                A full-stack developer focused on creating intuitive and engaging digital experiences.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/projects">View My Work</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact Me <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;

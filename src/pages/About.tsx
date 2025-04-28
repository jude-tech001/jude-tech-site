
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const About = () => {
  const skills = [
    "React.js", "TypeScript", "Node.js", 
    "PostgreSQL", "Tailwind CSS", "Next.js", 
    "GraphQL", "AWS", "Docker"
  ];

  return (
    <PageTransition>
      <section className="section">
        <div className="container-content">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-8">
                I'm Alex Johnson, a full-stack developer with over 5 years of experience building web applications. 
                I specialize in creating responsive, accessible, and performant web experiences using modern technologies.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">My Journey</h2>
              <p className="mb-6">
                After graduating with a degree in Computer Science, I worked at a startup where I developed 
                my skills in front-end and back-end development. Since then, I've worked with agencies, 
                tech companies, and as a freelancer, helping businesses solve problems through technology.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">My Approach</h2>
              <p className="mb-6">
                I believe in writing clean, maintainable code and focusing on creating intuitive user experiences. 
                I'm passionate about staying up-to-date with the latest technologies and best practices in web development.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">Skills & Technologies</h2>
              <div className="flex flex-wrap gap-2 mb-12">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;

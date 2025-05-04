
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import { MessageCircle, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleWhatsAppClick = () => {
    // WhatsApp API URL with the phone number
    const whatsappUrl = "https://wa.me/2349168474213";
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Opening WhatsApp",
      description: "Redirecting you to WhatsApp to continue the conversation.",
    });
  };

  return (
    <PageTransition>
      <section className="section">
        <div className="container-content">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Have a question or want to work together? Message me directly on WhatsApp and I'll get back to you as soon as possible.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MessageCircle size={18} />
                    <h3 className="font-medium">WhatsApp</h3>
                    <p className="text-muted-foreground">+2349168474213</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <h3 className="font-medium">Based in</h3>
                    <p className="text-muted-foreground">Lekki, Lagos State, Nigeria</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Follow me</h3>
                    <div className="flex gap-4 mt-2">
                      <a href="#" className="hover:text-primary">Twitter</a>
                      <a href="#" className="hover:text-primary">GitHub</a>
                      <a href="#" className="hover:text-primary">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <div className="text-center mb-4">
                  <h2 className="text-xl font-semibold">Send me a message</h2>
                  <p className="text-muted-foreground mt-2">Click the button below to chat with me on WhatsApp</p>
                </div>
                <Button 
                  onClick={handleWhatsAppClick} 
                  size="lg" 
                  className="gap-2"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;

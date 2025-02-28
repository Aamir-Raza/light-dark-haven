
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const handleDownloadResume = () => {
    // In a real implementation, this would point to an actual file
    // For demonstration, we'll just show an alert
    alert("Downloading resume...");
    // In production, you'd use:
    // window.open("/path-to-your-resume.pdf", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 flex flex-col items-center justify-center min-h-screen">
        <div className="container max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary mb-2 animate-slide-in">
              <span className="text-sm font-medium tracking-wide">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">John Doe</span>.<br />
              Designer & Developer
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              I design and build digital experiences that are intuitive, accessible, and visually stunning. Let's create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6" 
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 group">
                <a href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
            
            <SocialLinks className="mt-10" />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/50">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary mb-2">
                <span className="text-sm font-medium tracking-wide">Get in Touch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let's Work Together</h2>
              <p className="text-muted-foreground">
                I'm currently available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hi, then get in touch.
              </p>
              <div className="pt-4">
                <SocialLinks />
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

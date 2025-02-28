
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "glassmorphism py-3" : "py-5"
    )}>
      <nav className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-medium tracking-tight hover:opacity-80 transition-opacity"
        >
          Portfolio
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={cn(
              "transition-all hover:opacity-80",
              location.pathname === "/" ? "font-medium" : "font-normal"
            )}
          >
            Home
          </Link>
          <Link 
            to="/blog" 
            className={cn(
              "transition-all hover:opacity-80",
              location.pathname === "/blog" ? "font-medium" : "font-normal"
            )}
          >
            Blog
          </Link>
          {location.pathname === "/" ? (
            <button 
              onClick={scrollToContact}
              className="transition-all hover:opacity-80"
            >
              Contact
            </button>
          ) : (
            <Link to="/#contact" className="transition-all hover:opacity-80">
              Contact
            </Link>
          )}
          <ThemeToggle />
        </div>
        
        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            className="ml-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="glassmorphism md:hidden py-4 animate-fade-in">
          <div className="container mx-auto flex flex-col space-y-4">
            <Link 
              to="/" 
              className={cn(
                "py-2 px-4 rounded transition-colors",
                location.pathname === "/" ? "font-medium" : "font-normal"
              )}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className={cn(
                "py-2 px-4 rounded transition-colors",
                location.pathname === "/blog" ? "font-medium" : "font-normal"
              )}
            >
              Blog
            </Link>
            {location.pathname === "/" ? (
              <button 
                onClick={scrollToContact}
                className="py-2 px-4 rounded text-left transition-colors"
              >
                Contact
              </button>
            ) : (
              <Link 
                to="/#contact" 
                className="py-2 px-4 rounded transition-colors"
              >
                Contact
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

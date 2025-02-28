
import { Github, Linkedin, Film } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
  const socialLinks = [
    { 
      name: "GitHub", 
      url: "https://github.com", 
      icon: Github 
    },
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com", 
      icon: Linkedin 
    },
    {
      name: "IMDB",
      url: "https://imdb.com",
      icon: Film
    }
  ];

  return (
    <div className={cn("flex items-center space-x-4", className)}>
      {socialLinks.map((link) => (
        <a 
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:text-primary hover:scale-110"
          aria-label={link.name}
        >
          <link.icon className="h-5 w-5" />
          <span className="sr-only">{link.name}</span>
        </a>
      ))}
    </div>
  );
}

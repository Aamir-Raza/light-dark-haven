
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPosts = [
  {
    id: 1,
    title: "Design Principles for Modern Web Applications",
    excerpt: "Exploring the key design principles that make web applications more intuitive and user-friendly.",
    date: "May 15, 2023",
    category: "Design",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Future of Frontend Development",
    excerpt: "A look at emerging technologies and methodologies shaping the future of frontend development.",
    date: "April 28, 2023",
    category: "Development",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Optimizing Performance in React Applications",
    excerpt: "Practical strategies to improve the performance of your React applications for better user experience.",
    date: "March 12, 2023",
    category: "Performance",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Creating Accessible User Interfaces",
    excerpt: "A comprehensive guide to building accessible interfaces that work for everyone.",
    date: "February 5, 2023",
    category: "Accessibility",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "The Art of Minimalist Design",
    excerpt: "How to create impactful designs with less, focusing on the essential elements that truly matter.",
    date: "January 20, 2023",
    category: "Design",
    readTime: "6 min read"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Blog Header */}
      <section className="pt-32 md:pt-40 pb-16">
        <div className="container max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary mb-2">
              <span className="text-sm font-medium tracking-wide">Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Thoughts, Ideas & Insights
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of articles, tutorials, and insights from my journey in design and development.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-10">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 gap-10">
            {BlogPosts.map((post) => (
              <article 
                key={post.id} 
                className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 animate-fade-in" 
                style={{ animationDelay: `${post.id * 100}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                    <a href="#">{post.title}</a>
                  </h2>
                  
                  <p className="text-muted-foreground mb-6">
                    {post.excerpt}
                  </p>
                  
                  <Button asChild variant="ghost" className="px-0 text-primary hover:text-primary hover:bg-transparent group">
                    <a href="#">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <Button asChild>
              <Link to="/">
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;

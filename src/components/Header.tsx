
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  
  const isCurrentPath = (path: string) => {
    return location.pathname === path;
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="py-6 w-full">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10">
            <img 
              src="/lovable-uploads/4ee2de0b-6018-45cf-8550-4a8703a523ca.png" 
              alt="JUDE-TECH Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-bold">JUDE-TECH</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="/" 
                  className={cn(
                    "text-sm transition-colors hover:text-primary", 
                    isCurrentPath("/") && "font-medium text-primary"
                  )}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={cn(
                    "text-sm transition-colors hover:text-primary", 
                    isCurrentPath("/about") && "font-medium text-primary"
                  )}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className={cn(
                    "text-sm transition-colors hover:text-primary", 
                    isCurrentPath("/projects") && "font-medium text-primary"
                  )}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className={cn(
                    "text-sm transition-colors hover:text-primary", 
                    isCurrentPath("/blog") && "font-medium text-primary"
                  )}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={cn(
                    "text-sm transition-colors hover:text-primary", 
                    isCurrentPath("/contact") && "font-medium text-primary"
                  )}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

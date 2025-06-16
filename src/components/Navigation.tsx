
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const aboutDropdownItems = [
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Achievements", path: "/achievements" }
  ];

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Trishna Das
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 ${
                  location.pathname === item.path 
                    ? 'bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400' 
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 ${
                    aboutDropdownItems.some(item => location.pathname === item.path) || location.pathname === '/about'
                      ? 'bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400' 
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  About
                  <ChevronDown size={16} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-slate-800 border dark:border-slate-700 shadow-lg">
                <DropdownMenuItem asChild>
                  <Link
                    to="/about"
                    className={`block px-3 py-2 text-sm transition-colors ${
                      location.pathname === '/about'
                        ? 'bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    About Me
                  </Link>
                </DropdownMenuItem>
                {aboutDropdownItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 text-sm transition-colors ${
                        location.pathname === item.path
                          ? 'bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-700 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.path 
                      ? 'bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400' 
                      : 'text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile About Section */}
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/about'
                    ? 'bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About Me
              </Link>
              
              {aboutDropdownItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 ml-4 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.path 
                      ? 'bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400' 
                      : 'text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

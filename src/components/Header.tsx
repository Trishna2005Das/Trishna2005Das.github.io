
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";

const Header = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/trishnadas7897/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Trishna2005Das', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:trishnadas7897@gmail.com', '_blank');
  };

  const handlePortfolioClick = () => {
    window.open('#', '_blank');
  };

  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white py-20 mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in text-white">Trishna Das</h1>
          <p className="text-2xl mb-4 text-slate-200 dark:text-slate-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>Python Developer & ML Enthusiast</p>
          <p className="text-xl mb-8 text-slate-300 dark:text-slate-400 animate-fade-in" style={{ animationDelay: '0.4s' }}>Backend Frameworks | AI/ML | Cloud Infrastructure</p>
          
          <div className="flex justify-center items-center gap-8 mb-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 text-blue-300 dark:text-blue-400">
              <Phone size={18} />
              <span>+91 7439523511</span>
            </div>
            <div className="flex items-center gap-2 text-blue-300 dark:text-blue-400 cursor-pointer" onClick={handleEmailClick}>
              <Mail size={18} />
              <span>trishnadas7897@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-blue-300 dark:text-blue-400">
              <span>Bhubaneswar, India</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              onClick={handleLinkedInClick}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white border-none transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Linkedin size={20} className="mr-2" />
              LinkedIn
            </Button>
            <Button 
              onClick={handleGitHubClick}
              className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white border-none transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Github size={20} className="mr-2" />
              GitHub
            </Button>
            <Button 
              onClick={handlePortfolioClick}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-700 dark:to-blue-700 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white border-none transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <ExternalLink size={20} className="mr-2" />
              Portfolio
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

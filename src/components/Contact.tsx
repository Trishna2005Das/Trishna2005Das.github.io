
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/trishnadas7897/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Trishna2005Das', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:trishnadas7897@gmail.com', '_blank');
  };

  return (
    <section className="py-16 bg-slate-900 dark:bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
            <p className="text-slate-300 dark:text-slate-400 mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, collaborating on exciting projects, 
              or simply connecting with fellow developers and ML enthusiasts. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 cursor-pointer" onClick={handleEmailClick}>
                <Mail className="text-blue-400 dark:text-blue-300" size={20} />
                <span className="text-white">trishnadas7897@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-400 dark:text-blue-300" size={20} />
                <span className="text-white">+91 7439523511</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-400 dark:text-blue-300" size={20} />
                <span className="text-white">Bhubaneswar, India</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-white border-white/30 hover:bg-white/10 dark:border-white/20 dark:hover:bg-white/5 transform transition-all duration-300 hover:scale-105"
                  onClick={handleGitHubClick}
                >
                  <Github size={16} className="mr-2" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-white border-white/30 hover:bg-white/10 dark:border-white/20 dark:hover:bg-white/5 transform transition-all duration-300 hover:scale-105"
                  onClick={handleLinkedInClick}
                >
                  <Linkedin size={16} className="mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>

          <Card className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-800 dark:text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400" />
                </div>
                <div>
                  <Input placeholder="Subject" className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={4} className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

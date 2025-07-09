
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Code } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-teal-400" size={20} />,
      label: "Email (Primary)",
      value: "trishnadas7897@gmail.com",
      href: "mailto:trishnadas7897@gmail.com"
    },
    {
      icon: <Mail className="text-teal-400" size={20} />,
      label: "Email (Outlook)",
      value: "trishnadas2021@outlook.com",
      href: "mailto:trishnadas2021@outlook.com"
    },
    {
      icon: <Phone className="text-teal-400" size={20} />,
      label: "Phone",
      value: "+91 7439523511",
      href: "tel:+917439523511"
    },
    {
      icon: <MapPin className="text-teal-400" size={20} />,
      label: "Location",
      value: "Bhubaneswar, India",
      href: null
    },
    {
      icon: <Linkedin className="text-teal-400" size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/trishnadas7897",
      href: "https://linkedin.com/in/trishnadas7897"
    },
    {
      icon: <Github className="text-teal-400" size={20} />,
      label: "GitHub",
      value: "github.com/Trishna2005Das",
      href: "https://github.com/Trishna2005Das"
    },
    {
      icon: <Code className="text-teal-400" size={20} />,
      label: "LeetCode",
      value: "leetcode.com/u/trishnadas2005",
      href: "https://leetcode.com/u/trishnadas2005/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a chat about technology!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm always open to discussing new opportunities, interesting projects, 
                or potential collaborations. Whether you're looking for a developer, 
                want to discuss a project idea, or just want to connect, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-black rounded-lg border border-gray-700 hover:border-teal-400/50 transition-colors duration-200">
                  {info.icon}
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-white hover:text-teal-400 transition-colors duration-200 flex items-center space-x-1"
                        target={info.href.startsWith('http') ? '_blank' : '_self'}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        <span>{info.value}</span>
                        {info.href.startsWith('http') && <ExternalLink size={14} />}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black p-8 rounded-lg border border-gray-700">
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto">
                <img 
                  src="/lovable-uploads/8fb49030-a646-4f96-9786-1f3ecb736036.png" 
                  alt="Trishna Das Profile Photo" 
                  className="w-full h-full object-cover rounded-full border-4 border-teal-400/20 hover:border-teal-400/50 transition-colors duration-200"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Trishna Das</h3>
                <p className="text-teal-400 font-medium mb-4">Full Stack Developer & AI Engineer</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "Building innovative solutions with code, one project at a time. 
                  Let's create something amazing together!"
                </p>
              </div>

              <div className="flex justify-center space-x-4">
                <a
                  href="https://linkedin.com/in/trishnadas7897"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-teal-500/20 text-teal-400 rounded-lg hover:bg-teal-500/30 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Trishna2005Das"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-teal-500/20 text-teal-400 rounded-lg hover:bg-teal-500/30 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://leetcode.com/u/trishnadas2005/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-teal-500/20 text-teal-400 rounded-lg hover:bg-teal-500/30 transition-colors duration-200"
                >
                  <Code size={20} />
                </a>
                <a
                  href="mailto:trishnadas7897@gmail.com"
                  className="p-3 bg-teal-500/20 text-teal-400 rounded-lg hover:bg-teal-500/30 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

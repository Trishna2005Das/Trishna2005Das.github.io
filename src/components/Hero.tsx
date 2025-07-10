import React, { useState, useEffect } from 'react';
import { Code, Mail } from 'lucide-react';

const Hero = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const commands = [
    "$ whoami > Building innovative solutions with code",
    "Languages: Python, C++, Java, JavaScript",
    "Frameworks: Django, React, FastAPI, Flutter",
    "Cloud: AWS, Docker, Kubernetes",
    "AI/ML: PyTorch, TensorFlow, NLP",
    "trishna@dev:~$ git status",
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isTyping && currentCommand < commands.length) {
      const currentText = commands[currentCommand];
      if (displayText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 50);
      } else {
        timeoutId = setTimeout(() => {
          if (currentCommand < commands.length - 1) {
            setCurrentCommand(prev => prev + 1);
            setDisplayText('');
          } else {
            setIsTyping(false);
          }
        }, 2000);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, currentCommand, isTyping]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Python Developer <span className="text-teal-400">Backend & DevOps</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-400 mt-2 font-medium">
              Exploring AI/ML • Learning by Building 
            </h2>
          </div>

          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            I enjoy crafting intelligent, scalable systems that are built with purpose and optimized for impact — from Python APIs to cloud deployments. My interest lies in bridging development, infrastructure, and AI to deliver meaningful software.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-400 transition-all duration-200 hover:scale-105"
            >
              <Code className="mr-2" size={20} />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 border-2 border-teal-500 text-teal-400 font-semibold rounded-lg hover:bg-teal-500/10 transition-all duration-200"
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Section - Terminal Simulation */}
        <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm border border-gray-700 shadow-2xl">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <div className="space-y-2 min-h-[200px]">
            {commands.slice(0, currentCommand).map((cmd, index) => (
              <div key={index} className="text-gray-300">
                <span className="text-teal-400">{cmd.split(':')[0]}:</span>
                <span className="text-white">{cmd.split(':').slice(1).join(':')}</span>
              </div>
            ))}
            {isTyping && (
              <div className="text-gray-300">
                <span className="text-teal-400">{displayText.split(':')[0]}:</span>
                <span className="text-white">{displayText.split(':').slice(1).join(':')}</span>
                <span className="animate-pulse text-teal-400">|</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

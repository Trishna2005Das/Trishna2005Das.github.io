
import React from 'react';
import { GraduationCap, MapPin, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin className="text-teal-400" size={20} />
              <span>Bhubaneswar, India</span>
            </div>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a passionate Computer Science student at VSSUT with a strong foundation in 
                full-stack development and artificial intelligence. My journey in technology has 
                led me to explore various domains including IoT, machine learning, and cloud infrastructure.
              </p>
              
              <p>
                Currently working as a Developer Intern at Codecis AI, where I contribute to enterprise 
                CRM platforms and enhance deployment pipelines for development teams. I have hands-on 
                experience with modern technologies and a proven track record of building scalable solutions.
              </p>
              
              <p>
                When I'm not coding, you'll find me participating in hackathons, contributing to open-source 
                projects, or exploring the latest trends in AI and machine learning. I believe in continuous 
                learning and pushing the boundaries of what's possible with technology.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black p-6 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="text-teal-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-400">B.Tech, Computer Science & Engineering</h4>
                  <p className="text-gray-300">Veer Surendra Sai University Of Technology (VSSUT), Burla</p>
                  <p className="text-sm text-gray-400">CGPA: 8.87/10</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-teal-400">Senior Secondary (XII)</h4>
                  <p className="text-gray-300">Delhi Public School Ruby Park (CBSE Board), Kolkata</p>
                  <p className="text-sm text-gray-400">Percentage: 93.60%</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-teal-400">Secondary (X)</h4>
                  <p className="text-gray-300">Mahadevi Birla Shishu Vihar (ICSE Board), Kolkata</p>
                  <p className="text-sm text-gray-400">Percentage: 95.10%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

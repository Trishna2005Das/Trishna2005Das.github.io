
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
               I’m Trishna Das , who thrives at the intersection of engineering and innovation. I enjoy building systems that not only work — but make sense. Whether it’s designing logic, automating tasks, or improving reliability, I focus on delivering solutions that are functional, scalable, and impactful.


              </p>
              
              <p>
                My internship experiences across industries — from finance (WNS) and healthcare (Inovaare) to enterprise CRM (Codecis AI) — have taught me how to work on real-world problems in fast-paced environments. These roles strengthened my ability to think critically, build with purpose, and navigate production-grade codebases with confidence.
              </p>
              
              <p>
               I’ve taken on complex challenges in national hackathons, where I’ve led teams, built end-to-end platforms under pressure, and pitched to real stakeholders. What excites me most is using technology to improve systems, simplify processes, and create value — and I’m always looking for teams that share that mindset.

Outside of development, I’m someone who enjoys focused learning, sharp discussions, and a clean workspace (with way too many sticky notes).
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

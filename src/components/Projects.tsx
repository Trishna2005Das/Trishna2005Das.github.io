
import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "IoT-Based Milk Freshness Detection System",
      description: "Developed an ESP32-based system using temperature, ultrasonic, calorimetric, and methane sensors to detect milk freshness. Integrated Python analysis into C for data transmission to ThingSpeak and MATLAB for visualization.",
      technologies: ["ESP32", "Python", "C", "ThingSpeak", "MATLAB", "IoT Sensors"],
      category: "IoT & Hardware"
    },
    {
      title: "Self-Balancing Bot with LQR Control",
      description: "Designed and simulated a self-balancing bot in CoppeliaSim, optimizing LQR parameters for stability and disturbance handling. Implemented velocity control and manipulator integration.",
      technologies: ["CoppeliaSim", "LQR Control", "Python", "Control Systems", "Robotics"],
      category: "Robotics & Control",
      link: "https://github.com/Trishna2005Das/eyantra-2024-building-bot-labyrinth-legends.git",
      linkType: "github"
    },
    {
      title: "Library Management System with FastAPI",
      description: "Created a backend system with FastAPI and MySQL, providing efficient CRUD operations and RESTful APIs for book and user management.",
      technologies: ["FastAPI", "MySQL", "Python", "REST API", "SQLAlchemy"],
      category: "Backend Development",
      link: "https://github.com/Trishna2005Das/library-management-system.git",
      linkType: "github"
    },
    {
      title: "Attendance Management App",
      description: "Built a mobile-friendly web application using Flutter and Flask for real-time attendance tracking via QR codes and fingerprint scanning, with a secure MongoDB database for record management.",
      technologies: ["Flutter", "Flask", "MongoDB", "QR Codes", "Biometric Authentication"],
      category: "Mobile & Web Development",
      link: "https://github.com/Trishna2005Das/Attendance-App.git",
      linkType: "github"
    },
    {
      title: "AI-Generated Image Detection",
      description: "Designed a deep learning model using PyTorch to classify real vs AI-generated images, focusing on adversarial robustness, at ML Hackathon 2025, IIT Bhubaneswar.",
      technologies: ["PyTorch", "Deep Learning", "Computer Vision", "CNN", "Image Classification"],
      category: "AI & Machine Learning",
      link: "https://github.com/Trishna2005Das/ml-hackathon-iitbbs2025.git",
      linkType: "github"
    },
    {
      title: "NGO EdTech Platform (J.P. Morgan Hackathon)",
      description: "Developed a scalable full-stack solution for an NGO-focused edtech platform within 24 hours. Achieved Finalist & Runner-up position at J.P. Morgan Code for Good 2025 Hackathon, Mumbai.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Full-Stack Development"],
      category: "Full-Stack Development",
      link: "https://github.com/Trishna2005Das/CFG-TEam-44.git",
      linkType: "github"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Key Projects</h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of innovative projects spanning IoT, AI, web development, and robotics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-black rounded-lg border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full border border-teal-500/30">
                    {project.category}
                  </span>
                  <Code className="text-teal-400" size={20} />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.link && (
                  <div className="flex justify-end">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 bg-teal-500/20 text-teal-300 text-sm rounded border border-teal-500/30 hover:bg-teal-500/30 hover:text-teal-200 transition-colors duration-200"
                    >
                      {project.linkType === 'github' ? (
                        <>
                          <Github size={16} />
                          View Code
                        </>
                      ) : (
                        <>
                          <ExternalLink size={16} />
                          View Demo
                        </>
                      )}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

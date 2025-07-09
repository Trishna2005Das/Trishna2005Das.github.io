import React from 'react';
import { Briefcase, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Developer Intern",
      company: "WNS",
      location: "Remote", 
      period: "June - August 2025",
      description: [
        "Developed a full-stack AI-powered task management web application for internal use",
        "Integrated intelligent features like OpenAI-powered automation and LangChain agents, with secure user authentication",
        "Built scalable solutions using modern web technologies and cloud deployment"
      ],
      technologies: ["Flask", "Angular", "MongoDB", "OpenAI API", "LangChain", "Docker", "GitHub Actions", "AWS"]
    },
    {
      type: "work",
      title: "Backend Developer Intern",
      company: "Codecis AI",
      location: "Remote",
      period: "January 2025",
      description: [
        "Built backend modules for a CRM system used by Western Capital Mortgage (USA)",
        "Enabled scalable user management, cloud deployment pipelines, and database operations",
        "Enhanced deployment pipelines for 10+ developers working on the CRM project using DevOps principles"
      ],
      technologies: ["Flask", "MongoDB", "REST APIs", "Git", "DevOps (CI/CD)", "Cloud Hosting"]
    },
    {
      type: "work",
      title: "AI Intern",
      company: "Inovaare",
      location: "Remote",
      period: "May - July 2024",
      description: [
        "Contributed to automating healthcare compliance workflows on Inovaare's audit platform",
        "Implemented OCR-based form parsing, KPI dashboards, and AWS S3-based secure file handling",
        "Developed automated solutions to streamline healthcare audit processes"
      ],
      technologies: ["Python", "AWS S3", "OCR (Tesseract)", "REST APIs", "Bootstrap", "KPI modules"]
    },
    {
      type: "training",
      title: "IBM SkillsBuild Summer Internship",
      company: "CSRBOX",
      location: "Remote",
      period: "June - August 2024",
      description: [
        "Gained hands-on experience in data analytics, visualization, and predictive modeling",
        "Worked with real-world datasets to improve data-driven decision-making",
        "Completed comprehensive training in IBM's data science tools and methodologies"
      ],
      technologies: ["Data Analytics", "Data Visualization", "Predictive Modeling", "IBM Tools"],
      link: "https://www.linkedin.com/posts/trishnadas7897_ibm-skillsbuild-dataanalytics-activity-7236062772357181440-LM-O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErreT8Be0AXiQ_R2SaPZAh-aYe8MOt61Jo"
    },
    {
      type: "training",
      title: "Data Analysis and Visualisation",
      company: "Deloitte Forage",
      location: "Remote",
      period: "January 2025",
      description: [
        "Completed practical tasks in Coding, Data Analysis, Development, Cyber Security, and Forensic Technology",
        "Developed structured problem-solving and analytical skills for real-world consulting challenges",
        "Gained insights into enterprise-level data analysis practices"
      ],
      technologies: ["Data Analysis", "Cyber Security", "Forensic Technology", "Problem Solving"],
      link: "https://www.linkedin.com/posts/trishnadas7897_forage-certificate-activity-7281413995335442432-gDWa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErreT8Be0AXiQ_R2SaPZAh-aYe8MOt61Jo"
    }
  ];

  const achievements = [
    {
      title: "Finalist & Runner-up – J.P. Morgan Code for Good 2025 Hackathon",
      description: "Developed a scalable full-stack solution for an NGO-focused edtech platform within 24 hours",
      link: "https://www.linkedin.com/posts/trishnadas7897_codeforgood-jpmorgan-mumbai-activity-7338634511808704514-WC1O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErreT8Be0AXiQ_R2SaPZAh-aYe8MOt61Jo"
    },
    {
      title: "Winner – Maze Hunt 2024 (Robotics Club, VSSUT)",
      description: "First place in robotics-based challenge competition"
    },
    {
      title: "Winner – Ideathon 2024 (E-Cell, VSSUT)",
      description: "First place in innovation and entrepreneurship ideation contest"
    },
    {
      title: "Winner – SharkTank 2.0 (Sambalpur University)",
      description: "First place in startup pitching competition",
      link: "https://www.linkedin.com/posts/ecellvssut_vssut-ecellvssut-activity-7246912574728912897-B7Rn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErreT8Be0AXiQ_R2SaPZAh-aYe8MOt61Jo"
    },
    {
      title: "Participant – IEEE Xtreme Encode 2.0",
      description: "Global programming competition participation",
      link: "https://www.linkedin.com/posts/trishnadas7897_certificate-of-participation-activity-7258092581027303425-Wjiy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErreT8Be0AXiQ_R2SaPZAh-aYe8MOt61Jo"
    },
    {
      title: "Ranked Top 60 – e-Yantra Robotics Competition (eYRC)",
      description: "Achieved top 60 ranking in national robotics competition"
    },
    {
      title: "Presenter – Startup Odisha 2.0 Pitching Session",
      description: "Presented innovative startup ideas at state-level pitching event",
      link: "https://www.linkedin.com/posts/trishnadas7897_startupodisha-utkarsh-entrepreneurship-activity-7285641967202365442-IsRb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErreT8Be0AXiQ_R2SaPZAh-aYe8MOt61Jo"
    },
    {
      title: "Contributor – ML Hackathon 2025 at IIT Bhubaneswar",
      description: "Developed an AI image detection model for machine learning challenge",
      link: "https://www.linkedin.com/posts/trishnadas7897_certificate-of-iit-bbs-ml-hackathon-activity-7321148430989352960-uYhH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErreT8Be0AXiQ_R2SaPZAh-aYe8MOt61Jo"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience & Training</h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Briefcase className="text-teal-400 mr-3" size={24} />
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-teal-400/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-400 rounded-full"></div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                      <span className="text-sm text-teal-400 font-medium">{exp.type === 'work' ? 'Work' : 'Training'}</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-300 mb-2 space-y-1 sm:space-y-0 sm:space-x-4">
                      <span className="font-medium text-teal-300">{exp.company}</span>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 text-sm flex items-start">
                          <span className="text-teal-400 mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-teal-500/20 text-teal-300 text-xs rounded border border-teal-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {exp.link && (
                      <div className="flex justify-end">
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 bg-teal-500/20 text-teal-300 text-sm rounded border border-teal-500/30 hover:bg-teal-500/30 hover:text-teal-200 transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                          View Certificate
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="text-teal-400 mr-3" size={24} />
              Key Achievements
            </h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-teal-400/50 transition-colors duration-200">
                  {achievement.link ? (
                    <a 
                      href={achievement.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-semibold text-teal-300 mb-2 block hover:text-teal-200 transition-colors duration-200"
                    >
                      {achievement.title}
                    </a>
                  ) : (
                    <h4 className="font-semibold text-teal-300 mb-2">{achievement.title}</h4>
                  )}
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

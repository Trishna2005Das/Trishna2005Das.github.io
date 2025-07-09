
import React from 'react';
import { Code, Server, Cloud, Brain, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-teal-400" size={24} />,
      title: "Programming Languages",
      skills: ["Python", "C++", "Java", "JavaScript", "SQL", "Dart"]
    },
    {
      icon: <Server className="text-teal-400" size={24} />,
      title: "Frameworks & Technologies",
      skills: ["Django", "FastAPI", "React.js", "Flask", "Flutter"]
    },
    {
      icon: <Cloud className="text-teal-400" size={24} />,
      title: "Cloud & DevOps",
      skills: ["Kubernetes", "AWS", "Docker", "CI/CD Pipelines", "Jenkins", "Datadog", "Grafana"]
    },
    {
      icon: <Brain className="text-teal-400" size={24} />,
      title: "AI & Machine Learning",
      skills: ["PyTorch", "TensorFlow", "NLP", "Deep Learning", "Computer Vision"]
    },
    {
      icon: <Database className="text-teal-400" size={24} />,
      title: "Database & Tools",
      skills: ["MySQL", "SQLite", "MongoDB", "SQLAlchemy", "Git", "Linux (Ubuntu)"]
    },
    {
      icon: <Wrench className="text-teal-400" size={24} />,
      title: "Specializations",
      skills: ["IoT", "Data Visualization", "PID/LQR Control", "Cloud Infrastructure", "DBMS"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center space-x-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-teal-500/20 text-teal-300 text-sm rounded-full border border-teal-500/30 hover:bg-teal-500/30 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

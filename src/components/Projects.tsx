
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "IoT-Based Milk Freshness Detection System",
      description: "Developed an ESP32-based system using temperature, ultrasonic, calorimetric, and methane sensors to detect milk freshness. Integrated Python analysis into C for data transmission to ThingSpeak and MATLAB for visualization.",
      technologies: ["Python", "C", "ESP32", "IoT", "MATLAB", "ThingSpeak"],
      category: "IoT",
      githubUrl: null
    },
    {
      title: "AI-Generated Image Detection",
      description: "Designed a deep learning model using PyTorch to classify real vs AI-generated images, focusing on adversarial robustness. Developed at ML Hackathon 2025, IIT Bhubaneswar.",
      technologies: ["Python", "PyTorch", "Deep Learning", "Computer Vision"],
      category: "AI/ML",
      githubUrl: "https://github.com/Trishna2005Das/ml-hackathon-iitbbs2025.git"
    },
    {
      title: "Library Management System with FastAPI",
      description: "Created a backend system with FastAPI and MySQL, providing efficient CRUD operations and RESTful APIs for book and user management.",
      technologies: ["Python", "FastAPI", "MySQL", "REST API", "SQLAlchemy"],
      category: "Backend",
      githubUrl: "https://github.com/Trishna2005Das/library-management-system.git"
    },
    {
      title: "Attendance Management App",
      description: "Built a mobile-friendly web application using Flutter and Flask for real-time attendance tracking via QR codes and fingerprint scanning, with a secure MongoDB database for record management.",
      technologies: ["Flutter", "Flask", "MongoDB", "QR Code", "Biometric"],
      category: "Full Stack",
      githubUrl: "https://github.com/Trishna2005Das/Attendance-App.git"
    },
    {
      title: "Self-Balancing Bot with LQR Control",
      description: "Designed and simulated a self-balancing bot in CoppeliaSim, optimizing LQR parameters for stability and disturbance handling. Implemented velocity control and manipulator integration.",
      technologies: ["Python", "Control Systems", "LQR", "CoppeliaSim", "Robotics"],
      category: "Robotics",
      githubUrl: "https://github.com/Trishna2005Das/eyantra-2024-building-bot-labyrinth-legends.git"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "IoT": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "AI/ML": return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      case "Backend": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Full Stack": return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300";
      case "Robotics": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  const handleGitHubClick = (url: string | null) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">Key Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-slate-800">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-800 dark:text-slate-100 leading-tight">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`w-full border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 ${
                    !project.githubUrl ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={() => handleGitHubClick(project.githubUrl)}
                  disabled={!project.githubUrl}
                >
                  <Github size={16} className="mr-2" />
                  View Code
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

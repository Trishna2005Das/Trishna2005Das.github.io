
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "Java", "JavaScript", "SQL", "Dart"],
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
    },
    {
      title: "Backend Frameworks",
      skills: ["Django", "FastAPI", "Flask"],
      color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
    },
    {
      title: "Frontend & Mobile",
      skills: ["React.js", "Flutter"],
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
    },
    {
      title: "Cloud & DevOps",
      skills: ["Kubernetes", "AWS", "Docker", "CI/CD Pipelines", "Jenkins", "Datadog", "Grafana"],
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "SQLite", "MongoDB", "SQLAlchemy", "Git"],
      color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
    },
    {
      title: "AI/ML & Analytics",
      skills: ["PyTorch", "Machine Learning", "Deep Learning", "NLP", "Data Visualization", "Matplotlib", "Tableau", "Power BI"],
      color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
    },
    {
      title: "Specializations",
      skills: ["IoT", "PID/LQR Control", "Cloud Infrastructure Management", "Data Science"],
      color: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 dark:text-slate-100">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

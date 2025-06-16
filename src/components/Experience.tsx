
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      role: "Developer Intern",
      company: "Codecis AI",
      period: "January 2025 - Present",
      description: [
        "Worked as Backend Developer for employee dashboard management at Western Capital Mortgage (WCM), USA",
        "Hands-on experience with building a CRM (Customer Relationship Management) platform",
        "Enhanced deployment pipelines for 10+ developers working on the CRM project using DevOps principles",
        "Managed cloud server infrastructure for the WCM employee dashboard"
      ],
      technologies: ["Python", "Backend Development", "CRM", "DevOps", "Cloud Infrastructure"]
    }
  ];

  const training = [
    {
      program: "IBM SkillsBuild Summer Internship",
      organization: "CSRBOX",
      period: "June - August 2024",
      description: [
        "Gained hands-on experience in data analytics, visualization, and predictive modeling",
        "Worked with real-world datasets to improve data-driven decision-making"
      ]
    },
    {
      program: "Data Analysis and Visualisation",
      organization: "Deloitte Forage",
      period: "January 2025",
      description: [
        "Completed practical tasks in Coding, Data Analysis, Development, Cyber Security, and Forensic Technology",
        "Developed structured problem-solving and analytical skills for real-world consulting challenges"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">Experience & Training</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-slate-700 dark:text-slate-300">Professional Experience</h3>
          {experiences.map((exp, index) => (
            <Card key={index} className="border border-slate-200 dark:border-slate-700 shadow-lg mb-6 bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 dark:text-slate-100">{exp.role}</CardTitle>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</span>
                  <span className="text-slate-500 dark:text-slate-400">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-slate-700 dark:text-slate-300">Training Programs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {training.map((program, index) => (
              <Card key={index} className="border border-slate-200 dark:border-slate-700 shadow-lg bg-white dark:bg-slate-800">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800 dark:text-slate-100">{program.program}</CardTitle>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">{program.organization}</span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">{program.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                        <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

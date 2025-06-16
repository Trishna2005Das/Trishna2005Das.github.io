
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "B.Tech, Computer Science & Engineering",
      institution: "Veer Surendra Sai University Of Technology (VSSUT), Burla",
      grade: "CGPA: 8.87/10",
      period: "2022 - 2026",
      status: "Pursuing"
    },
    {
      degree: "Senior Secondary (XII)",
      institution: "Delhi Public School Ruby Park (CBSE Board), Kolkata",
      grade: "Percentage: 93.60%",
      period: "2020 - 2022",
      status: "Completed"
    },
    {
      degree: "Secondary (X)",
      institution: "Mahadevi Birla Shishu Vihar (ICSE Board), Kolkata",
      grade: "Percentage: 95.10%",
      period: "2008 - 2020",
      status: "Completed"
    }
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">Education</h2>
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="border border-slate-200 dark:border-slate-700 shadow-lg mb-6 hover:shadow-xl transition-shadow bg-white dark:bg-slate-800">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-slate-800 dark:text-slate-100 mb-2">{edu.degree}</CardTitle>
                    <p className="text-slate-600 dark:text-slate-300">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">{edu.period}</span>
                    <div className="mt-1">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Pursuing' 
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
                          : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                  {edu.grade}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

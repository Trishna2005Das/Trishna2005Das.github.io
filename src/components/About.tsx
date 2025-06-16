
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="border border-slate-200 dark:border-slate-700 shadow-lg bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 dark:text-slate-100">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  I'm a passionate Python developer with expertise in backend frameworks and machine learning. 
                  Currently pursuing B.Tech in Computer Science & Engineering at VSSUT with a CGPA of 8.87/10.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  My experience spans from building scalable backend systems with FastAPI and Django to developing 
                  IoT solutions and AI models. I'm particularly interested in cloud infrastructure management and 
                  have hands-on experience with DevOps practices.
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="border border-slate-200 dark:border-slate-700 shadow-lg bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 dark:text-slate-100">Current Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    Backend Development with Python frameworks
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    Machine Learning & Deep Learning projects
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    Cloud Infrastructure & DevOps practices
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    IoT systems development
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

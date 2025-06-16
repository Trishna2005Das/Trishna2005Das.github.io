
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Star, Target, Code, ExternalLink } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Finalist & Runner-up – J.P. Morgan Code for Good 2025 Hackathon, Mumbai",
      organization: "Developed a scalable full-stack solution for an NGO-focused edtech platform within 24 hours",
      icon: Code,
      color: "text-blue-600 dark:text-blue-400",
      url: "https://www.linkedin.com/posts/trishnadas7897_codeforgood-jpmorgan-mumbai-activity-7338634511808704514-WC1O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErreT8Be0AXiQ_R2SaPZAh-aYe8MOt61Jo"
    },
    {
      title: "1st place in Maze Hunt 2024",
      organization: "Robotics, VSSUT",
      icon: Trophy,
      color: "text-yellow-600 dark:text-yellow-400",
      url: null
    },
    {
      title: "1st place in Ideathon 2024",
      organization: "Ecell, VSSUT",
      icon: Star,
      color: "text-blue-600 dark:text-blue-400",
      url: null
    },
    {
      title: "1st place in SharkTank 2.0",
      organization: "Sambalpur University",
      icon: Trophy,
      color: "text-green-600 dark:text-green-400",
      url: "https://www.linkedin.com/posts/ecellvssut_vssut-ecellvssut-activity-7246912574728912897-B7Rn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErreT8Be0AXiQ_R2SaPZAh-aYe8MOt61Jo"
    },
    {
      title: "Ranked 60th in eYRC Competition",
      organization: "e-Yantra Robotics Competition (Second Round)",
      icon: Target,
      color: "text-purple-600 dark:text-purple-400",
      url: null
    },
    {
      title: "IEEE Xtreme Encode 2.0 Participant",
      organization: "IEEE",
      icon: Star,
      color: "text-indigo-600 dark:text-indigo-400",
      url: "https://www.linkedin.com/posts/trishnadas7897_certificate-of-participation-activity-7258092581027303425-Wjiy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErreT8Be0AXiQ_R2SaPZAh-aYe8MOt61Jo"
    },
    {
      title: "Startup Odisha 2.0 Pitcher",
      organization: "Startup Odisha Pitching Session",
      icon: Target,
      color: "text-orange-600 dark:text-orange-400",
      url: "https://www.linkedin.com/posts/trishnadas7897_startupodisha-utkarsh-entrepreneurship-activity-7285641967202365442-IsRb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErreT8Be0AXiQ_R2SaPZAh-aYe8MOt61Jo"
    },
    {
      title: "ML Hackathon 2025 Participant",
      organization: "IIT Bhubaneswar's Pravaah",
      icon: Star,
      color: "text-red-600 dark:text-red-400",
      url: "https://www.linkedin.com/posts/trishnadas7897_certificate-of-iit-bbs-ml-hackathon-activity-7321148430989352960-uYhH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErreT8Be0AXiQ_R2SaPZAh-aYe8MOt61Jo"
    },
    {
      title: "IBM SkillsBuild Summer Internship",
      organization: "CSRBOX - Data Analytics & Visualization Training",
      icon: Star,
      color: "text-blue-600 dark:text-blue-400",
      url: "https://www.linkedin.com/posts/trishnadas7897_ibm-skillsbuild-dataanalytics-activity-7236062772357181440-LM-O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErreT8Be0AXiQ_R2SaPZAh-aYe8MOt61Jo"
    },
    {
      title: "Deloitte Forage Program",
      organization: "Data Analysis and Visualisation Certification",
      icon: Target,
      color: "text-green-600 dark:text-green-400",
      url: "https://www.linkedin.com/posts/trishnadas7897_forage-certificate-activity-7281413995335442432-gDWa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErreT8Be0AXiQ_R2SaPZAh-aYe8MOt61Jo"
    }
  ];

  const handleViewCertificate = (url: string | null) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="achievements" className="py-16 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">Key Achievements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-white dark:bg-slate-800" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-full bg-gray-100 dark:bg-gray-700 ${achievement.color} transition-transform duration-200 hover:scale-110`}>
                      <IconComponent size={20} />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-slate-800 dark:text-slate-100 leading-tight">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">{achievement.organization}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`w-full border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 ${
                      !achievement.url ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={() => handleViewCertificate(achievement.url)}
                    disabled={!achievement.url}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

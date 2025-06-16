
import Navigation from "@/components/Navigation";
import Achievements from "@/components/Achievements";

const AchievementsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Achievements />
      </div>
    </div>
  );
};

export default AchievementsPage;

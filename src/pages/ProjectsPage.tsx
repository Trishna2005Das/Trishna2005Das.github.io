
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;

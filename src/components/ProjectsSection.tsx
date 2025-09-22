
import { Button } from "@/components/ui/button";
import { Github, Link, Video } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  videoLink?: string;
}

const projects: ProjectProps[] = [
  {
    title: "Task Management App",
    description:
      "A comprehensive task management application featuring task creation, assignments, due dates, and progress tracking. Developed using Laravel PHP, MySQL, Tailwind CSS, JavaScript, and jQuery.",
    image: "/task.png",

    technologies: ["Laravel", "PHP", "Js", "HTML", "SQL", "Tailwind CSS"],
    githubLink: "https://github.com/RectoqOfficial/task_management_kiruthiga",
    demoLink: "https://task-app-demo.com",
    videoLink: "task.mp4",
  },
  {
    title: "Dental Click Frontend",
    description:
      "A modern, animated frontend for a dental clinic website with appointment scheduling, service information, and patient testimonials.",
    image: "d1.png",
    technologies: ["Tailwind CSS", "HTML", "JS", "Animation"],
    githubLink: "https://github.com/RectoqOfficial/dental_web_kiruthiga",
    demoLink: "https://keerthi1504.neocities.org/figmadentaldesign/",
    videoLink: "dental.mp4",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-portfolio-primary to-portfolio-accent rounded-2xl mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-portfolio-primary via-portfolio-secondary to-portfolio-accent bg-clip-text text-transparent mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and expertise in full stack development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: ProjectProps; index: number }) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-primary via-portfolio-accent to-portfolio-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 z-20">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-portfolio-primary">
              Project {index + 1}
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-portfolio-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="bg-gradient-to-r from-portfolio-light to-gray-100 text-portfolio-primary px-4 py-2 rounded-full text-sm font-medium border border-portfolio-primary/20 hover:shadow-md transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button asChild size="sm" variant="outline" className="flex items-center gap-2 hover:bg-portfolio-primary hover:text-white hover:border-portfolio-primary transition-all duration-300">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github size={16} /> GitHub
              </a>
            </Button>
            
            <Button asChild size="sm" className="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary hover:from-portfolio-secondary hover:to-portfolio-accent flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <Link size={16} /> Live Demo
              </a>
            </Button>
            
            {project.videoLink && (
              <Button asChild size="sm" variant="secondary" className="flex items-center gap-2 bg-gray-100 hover:bg-portfolio-accent hover:text-white transition-all duration-300">
                <a href={project.videoLink} target="_blank" rel="noopener noreferrer">
                  <Video size={16} /> Watch Video
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;


import { Button } from "@/components/ui/button";
import { Briefcase, Book, ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-portfolio-light">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              I'm a passionate Full Stack Developer with expertise in both
              frontend and backend technologies. I enjoy creating seamless,
              responsive web applications that deliver exceptional user
              experiences.
            </p>
            <p className="text-lg">
              I completed my B.E in collge details. During my academic
              journey, I developed a strong foundation in problem-solving and
              technical skills.
            </p>
            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <div className="bg-portfolio-primary p-3 rounded-full text-white mr-4">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Work Experience</h3>
                  <p className="text-gray-700 mt-2">
                    your experience
                  </p>
                  <p className="text-gray-600 mt-1">
                    Worked on frontend development projects including UI/UX
                    design implementation and responsive web development. Also
                    contributed to backend development tasks such as API
                    integration, database handling using
                    <span className="text-blue-600 font-semibold"> MySQL</span>,
                    and server-side logic using
                    <span className="text-blue-600 font-semibold">
                      {" "}
                      Laravel
                    </span>
                    .
                  </p>
                </div>
              </div>

              <div className="flex items-start mt-6">
                <div className="bg-portfolio-primary p-3 rounded-full text-white mr-4">
                  <Book size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Education</h3>
                  <p className="text-gray-700 mt-2">
                    B.E in Electronics and Communication Engineering
                  </p>
                  <p className="text-gray-600 mt-1">
                    Government College of Engineering, Bargur
                  </p>
                  <p className="text-gray-600 mt-1">
                    CGPA:{" "}
                    <span className="text-blue-600 font-semibold">8.49</span>
                  </p>
                </div>
              </div>
            </div>
            <Button
              asChild
              className="bg-portfolio-primary hover:bg-portfolio-secondary mt-6"
            >
              <a href="#projects">
                Explore My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-portfolio-primary/20 via-portfolio-accent/20 to-portfolio-secondary/20 blur-xl"></div>
            <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl border border-gray-100/50 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-portfolio-primary to-portfolio-accent rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-portfolio-primary to-portfolio-accent bg-clip-text text-transparent">
                  Technical Skills
                </h3>
              </div>

              <div className="space-y-6">
                <SkillBar skill="Frontend Development" percentage={90} />
                <SkillBar skill="Backend Development" percentage={85} />

                <SkillBar skill="UI/UX Design" percentage={80} />
                <SkillBar skill="Python" percentage={80}/>
                <SkillBar skill="Database Management" percentage={75} />
                <SkillBar skill="DevOps" percentage={70} />
              </div>

              <div className="mt-8 p-6 bg-gray-50/50 rounded-xl border border-gray-100">
                <h4 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wider">
                  Technologies
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "MySQL",
                    "Laravel",
                    "Git",
                    "Python",
                  ].map((tech) => (
                    <div key={tech} className="group">
                      <div className="bg-white hover:bg-gradient-to-r hover:from-portfolio-primary hover:to-portfolio-accent hover:text-white transition-all duration-300 py-3 px-4 rounded-lg text-sm font-medium text-center shadow-sm border border-gray-200/50 cursor-pointer transform hover:scale-105">
                        {tech}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ skill, percentage }: { skill: string, percentage: number }) => {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-gray-800 group-hover:text-portfolio-primary transition-colors duration-200">{skill}</span>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-bold text-portfolio-primary bg-portfolio-light px-2 py-1 rounded-full">{percentage}%</span>
        </div>
      </div>
      <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full"></div>
        <div 
          className="relative h-full bg-gradient-to-r from-portfolio-primary via-portfolio-secondary to-portfolio-accent rounded-full transition-all duration-1000 ease-out shadow-lg"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

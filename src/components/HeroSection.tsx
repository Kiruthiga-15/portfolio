import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactFormPopup from "./ContactFormPopup";

const HeroSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center pt-16"
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div
            className="order-2 lg:order-1 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="text-portfolio-primary">your name</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-700">
              <span className="relative">
                <span className="after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-portfolio-accent">
                  Full Stack Developer
                </span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Specializing in{" "}
              <span className="text-portfolio-primary font-semibold">
                frontend
              </span>{" "}
              and{" "}
              <span className="text-portfolio-primary font-semibold">
                backend development
              </span>
              . Creating responsive, user-friendly applications with modern
              technologies. Proficient in version control using{" "}
              <span className="text-blue-600 font-semibold">Git</span>,
              experienced with frameworks like{" "}
              <span className="text-blue-600 font-semibold">React</span>,{" "}
              <span className="text-blue-600 font-semibold">Laravel</span> and
              skilled in working with databases such as{" "}
              <span className="text-blue-600 font-semibold">MySQL</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-portfolio-primary hover:bg-portfolio-secondary"
              >
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary hover:from-portfolio-secondary hover:to-portfolio-accent "
                onClick={() => setIsContactFormOpen(true)}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div
            className="order-1 lg:order-2 flex justify-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-portfolio-primary to-portfolio-accent blur opacity-60"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-white animate-float">
                <img
                  src="img"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormPopup
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </>
  );
};

export default HeroSection;

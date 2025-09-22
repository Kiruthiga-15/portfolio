
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactFormPopup from "./ContactFormPopup";

const GetInTouchSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <>
      <section id="get-in-touch" className="py-20 bg-portfolio-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            I'm currently available for freelance projects, full-time positions, or collaborations. 
            Let's discuss how I can contribute to your project's success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-portfolio-primary hover:bg-gray-100"
              onClick={() => setIsContactFormOpen(true)}
            >
              Get In Touch
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
              <a href="#projects">View My Work</a>
            </Button>
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

export default GetInTouchSection;

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactFormPopup from "./ContactFormPopup";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-portfolio-primary">
            My<span className="text-portfolio-accent">Portfolio</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-800 hover:text-portfolio-primary font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-800 hover:text-portfolio-primary font-medium transition-colors">About</a>
            <a href="#projects" className="text-gray-800 hover:text-portfolio-primary font-medium transition-colors">Projects</a>
            <a href="#contact" className="text-gray-800 hover:text-portfolio-primary font-medium transition-colors">Contact</a>
            <Button 
              className="bg-portfolio-primary hover:bg-portfolio-secondary text-white"
              onClick={() => setIsContactFormOpen(true)}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full">
            <div className="container mx-auto py-4 flex flex-col gap-4">
              <a 
                href="#home" 
                className="text-gray-800 hover:text-portfolio-primary font-medium px-4 py-2 hover:bg-gray-100 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-800 hover:text-portfolio-primary font-medium px-4 py-2 hover:bg-gray-100 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-gray-800 hover:text-portfolio-primary font-medium px-4 py-2 hover:bg-gray-100 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-gray-800 hover:text-portfolio-primary font-medium px-4 py-2 hover:bg-gray-100 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="bg-portfolio-primary hover:bg-portfolio-secondary text-white mx-4"
                onClick={() => {
                  setIsContactFormOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </nav>

      <ContactFormPopup 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </>
  );
};

export default NavBar;

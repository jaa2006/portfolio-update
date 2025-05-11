
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyberbg/80 backdrop-blur-md py-3 shadow-lg shadow-cyberblue/10' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-orbitron text-2xl font-bold text-white">
          FIX<span className="text-cyberblue">CODE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/"
            className="font-orbitron text-white/80 hover:text-cyberblue transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about"
            className="font-orbitron text-white/80 hover:text-cyberblue transition-colors"
          >
            About
          </Link>
          <Link 
            to="/portfolio"
            className="font-orbitron text-white/80 hover:text-cyberblue transition-colors"
          >
            Portfolio
          </Link>
          <Link 
            to="/contact"
            className="font-orbitron text-white/80 hover:text-cyberblue transition-colors"
          >
            Contact
          </Link>
          <Link 
            to="/contact"
            className="cyber-button primary-btn text-sm"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cyberbg/95 backdrop-blur-lg border-t border-cyberblue/20">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Link 
              to="/"
              className="font-orbitron text-white/80 hover:text-cyberblue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className="font-orbitron text-white/80 hover:text-cyberblue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/portfolio"
              className="font-orbitron text-white/80 hover:text-cyberblue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact"
              className="font-orbitron text-white/80 hover:text-cyberblue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/contact"
              className="cyber-button primary-btn text-sm inline-block w-max"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyberbg/70 border-t border-white/10 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="font-orbitron text-2xl font-bold text-white inline-block mb-4">
              FIX<span className="text-cyberblue">CODE</span>
            </Link>
            <p className="text-white/60 mb-4">
              Code. Break. Fix. Repeat. Pushing the boundaries of web development and security.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="w-10 h-10 rounded-full bg-cyberbg border border-white/10 flex items-center justify-center text-white/70 hover:text-cyberblue hover:border-cyberblue transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" className="w-10 h-10 rounded-full bg-cyberbg border border-white/10 flex items-center justify-center text-white/70 hover:text-cyberblue hover:border-cyberblue transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" className="w-10 h-10 rounded-full bg-cyberbg border border-white/10 flex items-center justify-center text-white/70 hover:text-cyberblue hover:border-cyberblue transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-orbitron text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-white/60">
              <li><a href="/services/web-development" className="hover:text-cyberblue transition-colors">Web Development</a></li>
              <li><a href="/services/pentesting" className="hover:text-cyberblue transition-colors">Penetration Testing</a></li>
              <li><a href="/services/database" className="hover:text-cyberblue transition-colors">Database Management</a></li>
              <li><a href="/services/server-admin" className="hover:text-cyberblue transition-colors">Server Administration</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-orbitron text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/60">
              <li><Link to="/" className="hover:text-cyberblue transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-cyberblue transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-cyberblue transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-cyberblue transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-cyberblue transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-orbitron text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-white/60">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5 text-cyberblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Tokyo, Japan</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5 text-cyberblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>contact@fixcode.dev</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5 text-cyberblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+81 90 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FIXCODE. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/60">
            <a href="/terms" className="hover:text-cyberblue transition-colors">Terms of Service</a>
            <a href="/privacy" className="hover:text-cyberblue transition-colors">Privacy Policy</a>
            <a href="/cookies" className="hover:text-cyberblue transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

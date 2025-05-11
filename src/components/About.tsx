
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "15+", label: "Security Audits" },
  ];
  
  return (
    <section id="about" className="py-20 relative overflow-hidden px-4">
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full grid grid-cols-6 gap-px">
            {Array.from({ length: 6 * 10 }).map((_, index) => (
              <div key={index} className="border-t border-r border-white/5"></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left column with profile card */}
          <div className="relative flex justify-center">
            <div className="profile-card-parent">
              <div className="profile-card">
                <div className="profile-logo">
                  <span className="profile-circle profile-circle1"></span>
                  <span className="profile-circle profile-circle2"></span>
                  <span className="profile-circle profile-circle3"></span>
                  <span className="profile-circle profile-circle4"></span>
                  <span className="profile-circle profile-circle5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="profile-svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"></path>
                    </svg>
                  </span>
                </div>
                <div className="profile-glass"></div>
                <div className="profile-photo">
                  <img src="/lovable-uploads/f1da2e96-c07f-472f-8bf7-0ec200ac29b3.png" alt="Profile" className="profile-image" />
                </div>
                <div className="profile-content">
                  <span className="profile-title">Zulfikar Sandira</span>
                  <span className="profile-text">Full Stack Developer & Cybersecurity Specialist</span>
                </div>
                <div className="profile-bottom">
                  <div className="profile-social-buttons-container">
                    <button className="profile-social-button">
                      <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="profile-svg">
                          <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                      </svg>
                    </button>
                    <button className="profile-social-button">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="profile-svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                      </svg>
                    </button>
                    <button className="profile-social-button">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="profile-svg">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="profile-view-more">
                    <button className="profile-view-more-button">View more</button>
                    <svg className="profile-svg-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column with content */}
          <div>
            <h2 className="font-orbitron text-4xl font-bold mb-4 relative inline-block">
              <span className="relative z-10">ABOUT ME</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyberblue to-cyberpurple"></div>
            </h2>
            
            <h3 className="text-2xl font-orbitron mb-6 text-white">
              A Full-Stack Developer and Security Specialist With a Passion for Clean Code
            </h3>
            
            <p className="text-white/70 mb-6 leading-relaxed">
              I am a seasoned Full-Stack Developer and Cybersecurity Specialist with over 5 years of professional experience. My expertise lies in creating secure, responsive web applications while ensuring they're protected against modern cyber threats.
            </p>
            
            <p className="text-white/70 mb-8 leading-relaxed">
              With a deep understanding of both offensive and defensive security practices, I bring a unique perspective to development projects. My approach combines cutting-edge technologies with battle-tested security principles to deliver solutions that are both innovative and resilient.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 border border-white/10 rounded-lg bg-cyberbg/30 backdrop-blur-sm hover:border-cyberblue/50 transition-all">
                  <span className="block text-3xl font-bold font-orbitron bg-gradient-to-r from-cyberblue to-cyberpurple bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                  <span className="block text-sm text-white/70 mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              <Link to="/about" className="cyber-button primary-btn">
                Read More
              </Link>
              <Link to="/contact" className="cyber-button secondary-btn">
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

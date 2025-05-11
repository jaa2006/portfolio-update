
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-cyberbg overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto py-20 px-4">
        <section className="mb-16">
          <h1 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-8 text-center">
            About <span className="text-cyberblue">Me</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 flex justify-center">
              {/* New Card Design */}
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
            
            <div className="md:w-2/3 space-y-4">
              <h2 className="font-orbitron text-2xl font-bold text-cyberblue">Zulfikar Sandira</h2>
              <p className="text-white/80">
                Full Stack Developer with expertise in cybersecurity and penetration testing. 
                I specialize in building secure, scalable web applications and identifying vulnerabilities 
                in existing systems.
              </p>
              
              <p className="text-white/80">
                With over 8 years of experience in the tech industry, I've worked with startups and 
                established companies to develop robust solutions that withstand modern security threats.
              </p>
              
              <p className="text-white/80">
                My approach combines creative problem-solving with rigorous security practices, ensuring 
                that the applications I build are not only functional and user-friendly but also resistant 
                to common attack vectors.
              </p>
              
              <div className="pt-4">
                <h3 className="font-orbitron text-xl font-bold text-cyberpurple mb-2">Educational Background</h3>
                <ul className="list-disc pl-5 text-white/70 space-y-2">
                  <li>MSc in Cybersecurity - Tech University</li>
                  <li>BSc in Computer Science - Digital Institute</li>
                  <li>Certified Ethical Hacker (CEH)</li>
                  <li>AWS Certified Solutions Architect</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="font-orbitron font-bold text-3xl text-white mb-8 text-center">
            My <span className="text-cyberblue">Journey</span>
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-cyberblue pl-6 py-2">
              <h3 className="text-xl font-bold text-cyberpurple">2022 - Present</h3>
              <p className="text-white font-medium">Lead Developer at CyberDefense Inc.</p>
              <p className="text-white/70">Leading a team of developers to build secure enterprise applications and conducting regular security audits.</p>
            </div>
            
            <div className="border-l-4 border-cyberblue pl-6 py-2">
              <h3 className="text-xl font-bold text-cyberpurple">2019 - 2022</h3>
              <p className="text-white font-medium">Senior Developer at TechSolutions Ltd.</p>
              <p className="text-white/70">Developed and maintained large-scale web applications with a focus on security and scalability.</p>
            </div>
            
            <div className="border-l-4 border-cyberblue pl-6 py-2">
              <h3 className="text-xl font-bold text-cyberpurple">2017 - 2019</h3>
              <p className="text-white font-medium">Full Stack Developer at StartupX</p>
              <p className="text-white/70">Built innovative solutions for early-stage startups, focusing on rapid development and secure implementation.</p>
            </div>
            
            <div className="border-l-4 border-cyberblue pl-6 py-2">
              <h3 className="text-xl font-bold text-cyberpurple">2015 - 2017</h3>
              <p className="text-white font-medium">Junior Developer at CodeCraft</p>
              <p className="text-white/70">Started professional career working on various web development projects and learning security best practices.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

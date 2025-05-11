
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, FileCode, Terminal, Server } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create plus decorations
    const createPlusDecorations = () => {
      if (!heroRef.current) return;
      const heroElement = heroRef.current;
      const {
        width,
        height
      } = heroElement.getBoundingClientRect();

      // Remove existing plus decorations
      const existingDecorations = heroElement.querySelectorAll('.plus-decoration');
      existingDecorations.forEach(el => el.remove());

      // Create new plus decorations
      for (let i = 0; i < 20; i++) {
        const plus = document.createElement('div');
        plus.className = 'plus-decoration animate-plus-rotate';

        // Random position
        const xPos = Math.random() * width;
        const yPos = Math.random() * height;

        // Random size
        const size = 4 + Math.random() * 12;
        plus.style.left = `${xPos}px`;
        plus.style.top = `${yPos}px`;
        plus.style.width = `${size}px`;
        plus.style.height = `${size}px`;

        // Random animation delay
        plus.style.animationDelay = `${Math.random() * 10}s`;
        heroElement.appendChild(plus);
      }
    };
    createPlusDecorations();

    // Re-create on window resize
    window.addEventListener('resize', createPlusDecorations);
    return () => {
      window.removeEventListener('resize', createPlusDecorations);
    };
  }, []);
  
  return <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 px-4">
      {/* Technology logos with enhanced spotlight effect - larger and more pronounced */}
      <div className="relative flex flex-col items-center mb-0">
        {/* Larger gradient circle behind tech logos */}
        <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full 
          bg-gradient-radial from-cyberpurple/40 to-transparent z-0"></div>
        
        <div className="tech-logos-container z-10 mb-0 mt-10">
          <img 
            src="/lovable-uploads/a8d4b982-b96a-4383-a719-8572e508c525.png" 
            alt="Programming Technologies" 
            className="w-[350px] md:w-[450px] animate-float opacity-60" 
          />
        </div>
      </div>

      {/* Main title and slogan - positioned to blend with character */}
      <div className="relative -mt-24 md:-mt-32 z-20">
        {/* Blurred shadow behind the title instead of solid black box */}
        <div className="absolute inset-0 -m-4">
          <div className="w-full h-full drop-shadow-[0_0_25px_rgba(0,0,0,0.8)]"></div>
        </div>
        
        <h1 className="font-orbitron font-black text-5xl md:text-7xl text-white text-center mb-2 relative text-shadow-lg">
          FIX<span className="text-cyberblue">CODE</span>
        </h1>

        <p className="font-orbitron text-xl md:text-2xl text-white/80 text-center mb-6 tracking-wider relative text-shadow-md">
          CODE. BREAK. FIX. REPEAT.
        </p>
        
        {/* Subtitle */}
        <p className="text-lg text-white/70 text-center max-w-2xl mb-10 relative text-shadow-sm md:text-base">
          I'm a Full-Stack Developer, Penetration Tester, and Cybersecurity Enthusiast.
        </p>
      </div>
      
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16 z-10">
        <Link to="/portfolio" className="cyber-button primary-btn">
          Explore Portfolio
        </Link>
        <Link to="/contact" className="cyber-button secondary-btn">
          Hire Me
        </Link>
      </div>

      {/* Glass container elements replacing tech icons */}
      <div className="glass-container z-10 mt-4 mb-10">
        <div data-text="Github" style={{
        ['--r' as any]: -15
      }} className="glass">
          <svg viewBox="0 0 496 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
          </svg>
        </div>
        <div data-text="Code" style={{
        ['--r' as any]: 5
      }} className="glass">
          <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path>
          </svg>
        </div>
        <div data-text="Earn" style={{
        ['--r' as any]: 25
      }} className="glass">
          <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
          </svg>
        </div>
      </div>
    </section>;
};

export default Hero;

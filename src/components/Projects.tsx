
import React, { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Shield, Database } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "SecureShield",
      category: "Cybersecurity",
      description: "A comprehensive security solution that protects web applications from common vulnerabilities.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=500",
      technologies: ["React", "Node.js", "JWT", "Express"],
      icon: <Shield className="h-6 w-6 text-cyberpurple" />,
      link: "/projects/secureshield"
    },
    {
      title: "DataFlow",
      category: "Database Management",
      description: "A powerful database visualization and management tool for complex data structures.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=500",
      technologies: ["PostgreSQL", "Redis", "TypeScript", "D3.js"],
      icon: <Database className="h-6 w-6 text-cyberblue" />,
      link: "/projects/dataflow"
    },
    {
      title: "CodeNexus",
      category: "Web Development",
      description: "A collaborative coding platform with real-time code sharing and execution.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=500",
      technologies: ["React", "WebSockets", "Docker", "AWS"],
      icon: <Code className="h-6 w-6 text-cyberblue" />,
      link: "/projects/codenexus"
    },
    {
      title: "VulnScanner",
      category: "Security Tool",
      description: "Automated vulnerability scanner for web applications with detailed reporting.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=500",
      technologies: ["Python", "JavaScript", "OWASP", "Docker"],
      icon: <Shield className="h-6 w-6 text-cyberpurple" />,
      link: "/projects/vulnscanner"
    },
    {
      title: "QueryMaster",
      category: "Database Tool",
      description: "SQL query optimization and visualization tool for database administrators.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=500",
      technologies: ["MySQL", "TypeScript", "Chart.js", "Express"],
      icon: <Database className="h-6 w-6 text-cyberblue" />,
      link: "/projects/querymaster"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">PROJECTS</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyberblue to-cyberpurple"></div>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explore my recent work and technical achievements
          </p>
        </div>
        
        <div className="mx-auto max-w-5xl">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="bg-cyberbg/30 backdrop-blur-sm border border-white/10 overflow-hidden group hover:border-cyberblue/50 transition-all h-full flex flex-col">
                      <div className="relative overflow-hidden h-48">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyberbg via-transparent to-transparent"></div>
                        <div className="absolute bottom-3 left-3 bg-cyberbg/80 py-1 px-3 rounded-full text-xs font-orbitron border border-white/10 flex items-center gap-1">
                          {project.icon}
                          {project.category}
                        </div>
                      </div>
                      
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl font-orbitron text-white">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="flex-grow">
                        <CardDescription className="text-white/70">
                          {project.description}
                        </CardDescription>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span 
                              key={i} 
                              className="text-xs py-1 px-2 bg-white/5 rounded border border-white/10 text-white/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      
                      <CardFooter>
                        <a 
                          href={project.link} 
                          className="text-cyberblue font-orbitron text-sm hover:text-cyberpurple transition-colors flex items-center"
                        >
                          View Project
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                          </svg>
                        </a>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-8 border border-cyberblue bg-cyberbg/50 text-cyberblue hover:bg-cyberblue hover:text-cyberbg" />
            <CarouselNext className="-right-8 border border-cyberblue bg-cyberbg/50 text-cyberblue hover:bg-cyberblue hover:text-cyberbg" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;

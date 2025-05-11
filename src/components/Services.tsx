
import React from 'react';
import { Code, Shield, Database, Server } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Services: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building modern and responsive web applications using React, Next.js, and other cutting-edge technologies.",
      icon: <Code className="h-10 w-10 text-cyberblue" />,
      link: "/services/web-development"
    },
    {
      title: "Penetration Testing",
      description: "Identifying security vulnerabilities in your systems before malicious attackers do.",
      icon: <Shield className="h-10 w-10 text-cyberpurple" />,
      link: "/services/pentesting"
    },
    {
      title: "Database Management",
      description: "Designing, implementing and optimizing database solutions for maximum performance and security.",
      icon: <Database className="h-10 w-10 text-cyberblue" />,
      link: "/services/database"
    },
    {
      title: "Server Administration",
      description: "Setting up and maintaining secure server environments for your applications and services.",
      icon: <Server className="h-10 w-10 text-cyberpurple" />,
      link: "/services/server-admin"
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">SERVICES</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyberblue to-cyberpurple"></div>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Comprehensive technical solutions to help secure and optimize your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-cyberbg/30 backdrop-blur-sm border border-white/10 hover:border-cyberblue/50 transition-all group">
              <CardHeader className="pb-2">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-cyberbg to-cyberbg/50 border border-white/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-orbitron text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70 h-24">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <a 
                  href={service.link} 
                  className="text-cyberblue font-orbitron text-sm hover:text-cyberpurple transition-colors flex items-center"
                >
                  Learn More 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


import React, { useState } from 'react';
import { 
  ToggleGroup, 
  ToggleGroupItem 
} from "@/components/ui/toggle-group";

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "security", name: "Security" },
    { id: "devops", name: "DevOps" }
  ];

  const skills = [
    { name: "React", category: "frontend", level: 95 },
    { name: "TypeScript", category: "frontend", level: 90 },
    { name: "Node.js", category: "backend", level: 85 },
    { name: "Python", category: "backend", level: 80 },
    { name: "Network Security", category: "security", level: 92 },
    { name: "Penetration Testing", category: "security", level: 88 },
    { name: "Docker", category: "devops", level: 75 },
    { name: "Kubernetes", category: "devops", level: 70 },
    { name: "SQL", category: "backend", level: 87 },
    { name: "Web Security", category: "security", level: 90 },
    { name: "CSS/Tailwind", category: "frontend", level: 85 },
    { name: "CI/CD", category: "devops", level: 78 },
  ];

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-cyberbg to-cyberbg/80 relative overflow-hidden px-4">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-20 h-20 border border-cyberblue/30" 
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 45}deg)`,
                opacity: 0.1 + Math.random() * 0.3
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">SKILLS</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyberpurple to-cyberblue"></div>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            My technical expertise and specializations
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <ToggleGroup 
            type="single" 
            className="bg-cyberbg/50 border border-white/10 p-1 rounded-lg" 
            value={activeCategory} 
            onValueChange={(value) => {
              if (value) setActiveCategory(value);
            }}
          >
            {categories.map((category) => (
              <ToggleGroupItem 
                key={category.id} 
                value={category.id} 
                className="font-orbitron px-4 py-2 data-[state=on]:bg-gradient-to-r data-[state=on]:from-cyberblue/20 data-[state=on]:to-cyberpurple/20 data-[state=on]:text-white data-[state=on]:shadow-[0_0_10px_rgba(0,255,255,0.3)] data-[state=off]:text-white/60"
              >
                {category.name}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-cyberbg/30 backdrop-blur-sm border border-white/10 p-4 rounded-lg hover:border-cyberblue/50 transition-all"
            >
              <div className="flex justify-between mb-2">
                <span className="font-orbitron text-white">{skill.name}</span>
                <span className="font-orbitron text-cyberblue">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyberblue to-cyberpurple transition-all duration-1000 ease-out" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

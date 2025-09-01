import React from 'react';
import {  Code, Palette, Smartphone, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "blue"
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Responsive Design", "User Research", "Prototyping"],
      color: "purple"
    },
    {
      title: "Backend & Database",
      icon: Server,
      skills: ["Node.js", "API Development", "PostgreSQL", "MongoDB", "Authentication"],
      color: "green"
    },
    {
      title: "Mobile & Tools",
      icon: Smartphone,
      skills: ["React Native", "PWA", "Git", "Vercel", "Docker"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: "blue" | "purple" | "green" | "orange") => {
    const colors: Record<"blue" | "purple" | "green" | "orange", string> = {
      blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      green: "bg-green-500/20 text-green-400 border-green-500/30",
      orange: "bg-orange-500/20 text-orange-400 border-orange-500/30"
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400">
            Tools and technologies I use to create amazing digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(category.color as "blue" | "purple" | "green" | "orange")}`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-gray-400 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;

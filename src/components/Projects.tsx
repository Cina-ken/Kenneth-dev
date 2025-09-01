"use client";
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "fullstack",
      description: "Modern e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Cina-ken",
      demo: "#"
    },
    {
      title: "SaaS Dashboard",
      category: "frontend",
      description: "Analytics dashboard with real-time data visualization, user management, and responsive design.",
      technologies: ["React", "Chart.js", "TypeScript", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Cina-ken",
      demo: "#"
    },
    {
      title: "Mobile Banking App",
      category: "mobile",
      description: "Cross-platform mobile banking application with biometric authentication and transaction tracking.",
      technologies: ["React Native", "Node.js", "MongoDB", "JWT"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Cina-ken",
      demo: "#"
    },
    {
      title: "AI Content Generator",
      category: "fullstack",
      description: "AI-powered content generation tool with user authentication, payment processing, and API integration.",
      technologies: ["Next.js", "OpenAI API", "Prisma", "Stripe"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Cina-ken",
      demo: "#"
    },
    {
      title: "Restaurant Website",
      category: "frontend",
      description: "Modern restaurant website with online ordering, table reservations, and menu management system.",
      technologies: ["React", "Tailwind", "Framer Motion", "Contentful"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Cina-ken",
      demo: "#"
    },
    {
      title: "Fitness Tracking App",
      category: "mobile",
      description: "Cross-platform fitness app with workout tracking, progress analytics, and social features.",
      technologies: ["React Native", "Firebase", "Chart.js", "Push Notifications"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/Cina-ken",
      demo: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            A showcase of my recent work in web development and design
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <Image 
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a 
                    href={project.github}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href={project.demo}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
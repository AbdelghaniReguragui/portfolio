'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Projects() {
  const projects = [
    {
      title: 'PIM (Product Information Management)',
      description: 'Enterprise-level product information management system for e-commerce platforms, handling millions of product data entries with real-time synchronization.',
      technologies: ['.NET 6', 'Angular', 'MongoDB', 'Azure Service Bus', 'Clean Architecture'],
      image: '/api/placeholder/600/400',
      category: 'Enterprise Platform'
    },
    {
      title: 'Seller Platform',
      description: 'Comprehensive seller management platform enabling vendors to manage their products, orders, and performance analytics on e-commerce marketplaces.',
      technologies: ['React', '.NET 8', 'MySQL', 'Kafka', 'CQRS'],
      image: '/api/placeholder/600/400',
      category: 'E-commerce'
    },
    {
      title: 'Return Marketplace',
      description: 'Automated return processing system handling customer returns, refunds, and inventory management with intelligent routing and decision-making.',
      technologies: ['Java Spring', 'Angular', 'MongoDB', 'Azure DevOps', 'XUnit'],
      image: '/api/placeholder/600/400',
      category: 'Logistics'
    },
    {
      title: 'Pilotage Technique',
      description: 'Technical monitoring and management dashboard providing real-time insights into system performance, health metrics, and operational analytics.',
      technologies: ['ASP.NET MVC', 'Grafana', 'Oracle', 'Azure Service Bus', 'DDD'],
      image: '/api/placeholder/600/400',
      category: 'Monitoring'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Key projects showcasing technical expertise and problem-solving skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden shadow-sm border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-green-500/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10" />
                <div className="relative h-full flex items-center justify-center">
                  <Code className="w-16 h-16 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-background/80 text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
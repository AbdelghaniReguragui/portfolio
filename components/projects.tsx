'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code, X, Calendar, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: 'Seller - Octopia',
      description: 'Conception and Development of a platform enabling Cdiscount sellers to subscribe to a dedicated sales channel, featuring secure seller onboarding and subscription management.',
      technologies: ['.NET 6', 'ReactJS', 'MongoDB', 'Apache Kafka', 'Clean Architecture', 'DDD', 'CQRS', 'AES', 'RSA', 'XUnit', 'Azure DevOps'],
      image: '/images/cdiscount-logo.png',
      category: 'E-commerce',
      details: {
        duration: '6 months (February 2022 – July 2022)',
        team: '5 developers',
        role: 'Full-Stack Developer',
        challenges: [
          'Designing and developing three microservices (Seller, Subscription, Bank Account) following Clean Architecture, DDD, and CQRS',
          'Implementing AES and RSA encryption algorithms to secure banking data',
          'Setting up Apache Kafka for real-time synchronization between microservices',
          'Developing a dynamic subscription form in ReactJS for sellers'
        ],
        achievements: [
          'Delivered a secure and scalable seller onboarding platform',
          'Strengthened data security by implementing industry-standard encryption (AES, RSA)',
          'Improved system reliability and scalability with Kafka-based messaging',
          'Enhanced seller experience with a user-friendly ReactJS interface'
        ],
        responsibilities: [
          'Designed and developed three microservices (Seller, Subscription, Bank Account) following Clean Architecture, DDD, and CQRS',
          'Implemented AES and RSA encryption algorithms to secure banking data',
          'Set up Apache Kafka for real-time synchronization between microservices',
          'Developed a dynamic subscription form in ReactJS for sellers',
          'Wrote unit tests with XUnit to ensure code quality'
        ]
      }
    },
    {
      title: 'PIM (Product Information Management)',
      description: 'Design and Development of a Product Information Management (PIM) solution for the centralized management of both generic and specific product data at Showroomprivé.',
      technologies: ['.NET 6', 'ASP.NET MVC', 'Razor Pages', 'Kendo UI', 'MongoDB', 'Azure Service Bus', 'CQRS', 'DDD'],
  image: '/images/logo-showroomprive-2.png',
      category: 'Enterprise Platform',
      details: {
        duration: '15 months (October 2022 – December 2023)',
        team: '6 developers',
        role: '.NET Full Stack Software Engineer',
        challenges: [
          'Analyzing requirements and defining functional specifications with business teams',
          'Designing technical solutions for User Stories in collaboration with stakeholders',
          'Implementing scalable microservices architecture with Clean Architecture, DDD, and CQRS',
          'Ensuring data synchronization and communication between services'
        ],
        achievements: [
          'Contributed to the successful delivery of a centralized PIM system handling thousands of product references',
          'Improved software quality by introducing automated unit testing',
          'Designed and implemented a scalable microservices architecture ensuring maintainability and performance',
          'Optimized inter-service data synchronization with Azure Service Bus and Event Hub'
        ],
        responsibilities: [
          'Participated in business meetings to analyze requirements and define functional specifications',
          'Designed technical solutions for User Stories in collaboration with business teams',
          'Developed 3 microservices based on Clean Architecture, DDD, and CQRS principles',
          'Wrote unit tests for each User Story using XUnit',
          'Built the frontend interface using ASP.NET MVC, Razor Pages, Kendo UI, Vanilla JS, jQuery, and Ajax',
          'Implemented data synchronization and communication between services using Azure Service Bus and Event Hub',
          'Authored the project\'s technical documentation'
        ]
      }
    },
    {
      title: 'Return Marketplace',
      description: 'Development of a Return Management Solution for marketplace products on Showroomprive.com, automating the product return workflow and enhancing user experience.',
  technologies: ['.NET', 'Angular', 'WebForms', 'Front Microservices', 'XUnit', 'Azure DevOps', 'BFF Pattern'],
  image: '/images/logo-showroomprive-2.png',
      category: 'E-commerce',
      details: {
        duration: '5 months (January 2024 – May 2024)',
        team: '5 developers',
        role: 'Full-Stack Developer',
        challenges: [
          'Automating complex product return workflows for marketplace items',
          'Maintaining and improving existing frontend components',
          'Implementing Backend for Frontend (BFF) architecture',
          'Building dedicated micro-frontend for enhanced user experience'
        ],
        achievements: [
          'Delivered a robust solution for handling marketplace product returns',
          'Increased process automation, reducing manual intervention',
          'Improved frontend performance and user experience through Angular micro-frontend',
          'Secured long-term system continuity by onboarding and training internal staff'
        ],
        responsibilities: [
          'Maintained and improved existing frontend components',
          'Automated the product return workflow for marketplace items',
          'Authored technical design documentation for each new feature',
          'Developed a Backend for Frontend (BFF) using .NET',
          'Built a dedicated micro-frontend in Angular to enhance user experience',
          'Implemented unit testing on backend with XUnit',
          'Wrote final technical documentation',
          'Supported knowledge transfer by mentoring an internal Showroomprive collaborator'
        ]
      }
    },
    {
      title: 'Technical Steering Platform (Pilotage Technique)',
      description: 'Development of a technical steering solution for Cdiscount, consisting of three main modules: Sourcing (recruitment management), Financial Control (finance management), and Pilotage (HR administration).',
      technologies: ['.NET 6', '.NET 8', 'Java 8', '.NET Framework 6', 'ASP.NET MVC', 'JavaScript', 'jQuery', 'MySQL', 'Azure DevOps', 'Sciforma', 'Grafana'],
      image: '/images/cdiscount-logo.png',
      category: 'Enterprise Platform',
      details: {
        duration: 'Ongoing (June 2024 – Present)',
        team: '7 developers',
        role: 'Senior Full-Stack Developer',
        challenges: [
          'Designing and implementing data anonymization to ensure compliance with EU policies',
          'Enhancing the PPM API (Java 8) for better performance and reliability',
          'Scoping and executing the decommissioning of the Kiffometer tool',
          'Managing complex migrations to .NET 8 while maintaining production stability'
        ],
        achievements: [
          'Ensured compliance with EU data protection regulations through anonymization',
          'Successfully decommissioned a legacy tool (Kiffometer), simplifying the ecosystem',
          'Improved system observability and monitoring with Grafana',
          'Delivered stable migration to .NET 8, securing long-term system maintainability'
        ],
        responsibilities: [
          'Designed and implemented data anonymization to ensure compliance with EU policies',
          'Enhanced the PPM API (Java 8) for better performance and reliability',
          'Scoped and executed the decommissioning of the Kiffometer tool',
          'Migrated jobs and backend services to .NET 8',
          'Resolved Run & MCO (maintenance in operational conditions) tickets to guarantee production stability',
          'Managed Sciforma tool configuration using Sciforma Designer',
          'Integrated Grafana for job monitoring and performance tracking'
        ]
      }
    }
  ];

  return (
  <section id="projects" className="py-20 bg-muted/20">
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
              className="bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-xl overflow-hidden shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                {/* Subtle white overlay for depth */}
                <div className="absolute inset-0 bg-white/10 pointer-events-none z-10" />
                {/* Background image - different sizing based on logo type */}
                <div 
                  className={`absolute inset-0 bg-center bg-no-repeat ${
                    project.image.includes('cdiscount') ? 'bg-cover' : 'bg-contain'
                  } ${project.image.includes('showroomprive') ? 'bg-white' : ''}`}
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                {/* Overlay for Showroomprivé logo visibility in dark mode */}
                {project.image.includes('showroomprive') && (
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                )}
                {/* Very light overlay for subtle effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-white/10 to-transparent group-hover:from-white/20 group-hover:via-white/5 transition-all duration-300" />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 text-gray-800 text-xs px-3 py-1.5 rounded-full font-medium shadow-md">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm">
                    <Code className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative z-20">
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
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-emerald-400 dark:border-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors"
                    onClick={() => setSelectedProject(project)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {selectedProject.category}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">Duration</div>
                    <div className="text-sm text-muted-foreground">{selectedProject.details.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">Team Size</div>
                    <div className="text-sm text-muted-foreground">{selectedProject.details.team}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">My Role</div>
                    <div className="text-sm text-muted-foreground">{selectedProject.details.role}</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Key Challenges</h3>
                  <ul className="space-y-2">
                    {selectedProject.details.challenges.map((challenge: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {selectedProject.details.achievements.map((achievement: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-3">My Responsibilities</h3>
                <ul className="space-y-2">
                  {selectedProject.details.responsibilities.map((responsibility: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
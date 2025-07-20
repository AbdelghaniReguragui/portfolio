'use client';

import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export function Experience() {
  const experiences = [
    {
      company: 'Akkodis',
      position: 'Software Engineer',
      period: '2022 – Present',
      location: 'Casablanca, Morocco',
      projects: 'Cdiscount & Showroomprivé',
      companyLogo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      projectLogos: [
        {
          name: 'Cdiscount',
          logo: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
          url: 'https://www.cdiscount.com'
        },
        {
          name: 'Showroomprivé',
          logo: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400',
          url: 'https://www.showroomprive.com'
        }
      ],
      achievements: [
        'Developed .NET 6/8 and Java backends for high-traffic e-commerce platforms',
        'Implemented frontend components in Angular, ASP.NET, and React',
        'Architected microservices using Clean Architecture and CQRS patterns',
        'Integrated messaging systems with Kafka and Azure Service Bus',
        'Managed NoSQL databases with MongoDB for scalable data solutions',
        'Delivered comprehensive test coverage with XUnit testing framework',
        'Monitored applications using Grafana and managed CI/CD with Azure DevOps',
        'Maintained and enhanced Sciforma project management tools'
      ],
      projects_list: ['PIM (Product Information Management)', 'Seller Platform', 'Return Marketplace', 'Pilotage Technique']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground">
            Professional journey and key achievements
          </p>
        </motion.div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="absolute left-2 top-4 w-0.5 h-full bg-border"></div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow ml-8">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src={experience.companyLogo}
                      alt={`${experience.company} logo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{experience.position}</h3>
                    <div className="flex items-center text-muted-foreground">
                      <Building className="w-4 h-4 mr-2" />
                      {experience.company}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex flex-col items-start md:items-end">
                    <div className="flex items-center text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {experience.period}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Client Projects:</h4>
                  <div className="flex flex-wrap gap-4">
                    {experience.projectLogos.map((project, projectIndex) => (
                      <a
                        key={projectIndex}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-background rounded-lg p-3 border hover:shadow-md transition-all group"
                      >
                        <div className="relative w-8 h-8 rounded overflow-hidden mr-3">
                          <Image
                            src={project.logo}
                            alt={`${project.name} logo`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium mr-2">{project.name}</span>
                        <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Projects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.projects_list.map((project, projectIndex) => (
                      <span
                        key={projectIndex}
                        className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

export function Experience() {
  const exp = {
    company: 'Akkodis',
    position: 'Software Engineer',
    period: '2022 – Present',
    location: 'Casablanca, Morocco',
    companyLogo: '/images/akkodis-image.png',
    companyUrl: 'https://www.akkodis.com',
    projectLogos: [
      {
        name: 'Cdiscount',
        logo: '/images/cdiscount-logo.png',
        url: 'https://www.cdiscount.com',
      },
      {
        name: 'Showroomprivé',
        logo: '/images/logo-showroomprive.png',
        url: 'https://www.showroomprive.com',
      },
    ],
    achievements: [
      'Developed .NET 6/8 and Java backends for high-traffic e-commerce platforms',
      'Implemented frontend components in Angular, ASP.NET, and React',
      'Architected microservices using Clean Architecture and CQRS patterns',
      'Integrated messaging systems with Kafka and Azure Service Bus',
      'Managed NoSQL databases with MongoDB for scalable data solutions',
      'Delivered comprehensive test coverage with XUnit testing framework',
      'Monitored applications using Grafana and managed CI/CD with Azure DevOps',
      'Maintained and enhanced Sciforma project management tools',
    ],
    projects_list: [
      'PIM (Product Information Management)',
      'Seller Platform',
      'Return Marketplace',
      'Pilotage Technique',
    ],
  };

  return (
  <section id="experience" className="py-20 ">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Experience</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-lg p-8 shadow-lg border-2 border-emerald-200/60 flex flex-col gap-6"
        >
          
            <div className="mb-6 pl-2">
              <div className="flex flex-row items-center">
                <div className="flex flex-row items-center">
                  <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="mr-4">
                    <Image
                      src={exp.companyLogo}
                      alt={exp.company}
                      width={72}
                      height={72}
                      className="rounded-full bg-white p-2 shadow"
                    />
                  </a>
                  <div className="flex flex-col text-left">
                    <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
                    <div className="text-muted-foreground mb-1">{exp.company} &mdash; {exp.period}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
            </div>
            {/* Logos projets en dessous, alignés à gauche */}
            <div className="flex gap-4 mt-2 justify-start">
              {exp.projectLogos.map((proj) => (
                <a
                  key={proj.name}
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white rounded shadow flex items-center justify-center min-w-[64px] min-h-[64px] w-[64px] h-[64px]">
                    <Image
                      src={proj.logo}
                      alt={proj.name}
                      width={proj.name === 'Showroomprivé' ? 56 : 48}
                      height={proj.name === 'Showroomprivé' ? 56 : 48}
                      className="object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
          <ul className="text-left list-disc list-inside space-y-2 mb-4">
            {exp.achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {exp.projects_list.map((proj, i) => (
              <span
                key={i}
                className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
              >
                {proj}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Skills() {
  const greenGradient = 'from-green-500/20 via-emerald-500/20 to-teal-500/20';
  const skillCategories = [
    {
      category: 'Languages',
      gradient: greenGradient,
      skills: [
  { name: 'C#', logo: '/images/Csharp_Logo.png', color: 'bg-white/80 text-slate-900 border-slate-200/60', isImage: true },
  { name: 'Java', logo: '/images/java-logo.png', color: 'bg-white/80 text-gray-900 border-slate-200/60', isImage: true },
  { name: 'Python', logo: '/images/python-logo.png', color: 'bg-white/80 text-slate-900 border-slate-200/60', isImage: true },
  { name: 'JavaScript', logo: '/images/js-logo.png', color: 'bg-white/80 text-gray-900 border-slate-200/60', isImage: true },
  { name: 'PHP', logo: '/images/php-logo.png', color: 'bg-white/80 text-slate-900 border-slate-200/60', isImage: true }
      ]
    },
    {
      category: 'Frontend',
      gradient: greenGradient,
      skills: [
  { name: 'React', logo: '/images/react-logo.png', color: 'bg-white/80 text-slate-900 border-slate-200/60', isImage: true },
  { name: 'Angular', logo: '/images/angular-logo.webp', color: 'bg-white/80 text-gray-900 border-slate-200/60', isImage: true },
  { name: 'ASP.NET MVC', logo: '/images/asp.net-mvc-logo.png', color: 'bg-white/80 text-slate-900 border-slate-200/60', isImage: true },
  { name: 'Razor Pages', logo: '/images/razor-pages-logo.webp', color: 'bg-white/80 text-gray-900 border-slate-200/60', isImage: true },
  { name: 'HTML/CSS', logo: '/images/html-css-logo.webp', color: 'bg-white/80 text-slate-900 border-slate-200/60', isImage: true }
      ]
    },
    {
      category: 'Backend',
      gradient: greenGradient,
      skills: [
  { name: '.NET Core', logo: '/images/dotnet-core-logo.png', color: 'bg-white/80 text-slate-900 border-slate-200/60', isImage: true },
  { name: '.NET 6/8', logo: '/images/dotnet-6-8-logo.jpg', color: 'bg-white/80 text-gray-900 border-slate-200/60', isImage: true },
  { name: 'Java Spring', logo: '/images/spring-logo.webp', color: 'bg-white/80 text-slate-900 border-slate-200/60', isImage: true },
  { name: 'Clean Architecture', logo: '/images/clean-archi-logo.webp', color: 'bg-white/80 text-gray-900 border-slate-200/60', isImage: true },
  { name: 'CQRS', logo: '/images/cqrs-logo.png', color: 'bg-white/80 text-slate-900 border-slate-200/60', isImage: true },
  { name: 'DDD', logo: '/images/ddd-logo.jpg', color: 'bg-white/80 text-gray-900 border-slate-200/60', isImage: true }
      ]
    },
    {
      category: 'Databases',
      gradient: greenGradient,
      skills: [
  { name: 'MySQL', logo: '/images/mysql-logo.png', color: 'bg-white/80 text-slate-900 border-slate-200/60', isImage: true },
  { name: 'MongoDB', logo: '/images/mongodb-logo.jpg', color: 'bg-white/80 text-gray-900 border-slate-200/60', isImage: true },
  { name: 'Firebase', logo: '/images/firebase-logo.jpg', color: 'bg-white/80 text-slate-900 border-slate-200/60', isImage: true },
  { name: 'Oracle', logo: '/images/oracle-logo.png', color: 'bg-white/80 text-gray-900 border-slate-200/60', isImage: true }
      ]
    },
    {
      category: 'Tools & DevOps',
      gradient: greenGradient,
      skills: [
  { name: 'Azure DevOps', logo: '/images/azure-devops-logo.webp', color: 'bg-white/80 text-slate-900 border-slate-200/60', isImage: true },
  { name: 'Grafana', logo: '/images/grafana.png', color: 'bg-white/80 text-gray-900 border-slate-200/60', isImage: true },
  { name: 'Apache Kafka', logo: '/images/apache-kafka.png', color: 'bg-white/80 text-slate-900 border-slate-200/60', isImage: true },
  { name: 'Azure Service Bus', logo: '/images/azure-service-bus.png', color: 'bg-white/80 text-gray-900 border-slate-200/60', isImage: true }
      ]
    },
    {
      category: 'Testing',
      gradient: greenGradient,
      skills: [
  { name: 'XUnit', logo: '/images/x-unit.png', color: 'bg-white/80 text-slate-900 border-slate-200/60', isImage: true },
  { name: 'Unit Testing', logo: '/images/unit-tstnig.png', color: 'bg-white/80 text-gray-900 border-slate-200/60', isImage: true },
  { name: 'Integration Testing', logo: '/images/integration-testing.avif', color: 'bg-white/80 text-slate-900 border-slate-200/60', isImage: true }
      ]
    },
    {
      category: 'Mobile',
      gradient: greenGradient,
      skills: [
  { name: 'Flutter', logo: '/images/flutter.png', color: 'bg-white/80 text-slate-900 border-slate-200/60', isImage: true },
  { name: 'Android', logo: '/images/android.png', color: 'bg-white/80 text-gray-900 border-slate-200/60', isImage: true }
      ]
    }
  ];

  const getSkillColor = (skill: { name: string; logo: string; color: string; isImage: boolean }) => {
    return skill.color;
  };

  return (
  <section id="skills" className="py-20 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden bg-gradient-to-br ${category.gradient} rounded-xl p-6 shadow-lg border border-white/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group`}
            >
              {/* Background pattern effect (identique à About Me, overlays retirés) */}
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-foreground transition-colors">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.5 }}
                      viewport={{ once: true }}
                      className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium border backdrop-blur-sm transition-all duration-300 hover:shadow-lg cursor-pointer ${getSkillColor(skill)}`}
                    >
                      {skill.isImage ? (
                        <div className="relative w-7 h-7 flex-shrink-0">
                          <Image
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <span className="text-lg">{skill.logo}</span>
                      )}
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
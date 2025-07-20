'use client';

import { motion } from 'framer-motion';

export function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['C#', 'Java', 'Python', 'JavaScript', 'PHP']
    },
    {
      category: 'Frontend',
      skills: ['React', 'Angular', 'ASP.NET MVC', 'Razor Pages', 'HTML/CSS']
    },
    {
      category: 'Backend',
      skills: ['.NET Core', '.NET 6/8', 'Java Spring', 'Clean Architecture', 'CQRS', 'DDD']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Firebase', 'Oracle']
    },
    {
      category: 'Tools & DevOps',
      skills: ['Azure DevOps', 'Grafana', 'Apache Kafka', 'Azure Service Bus']
    },
    {
      category: 'Testing',
      skills: ['XUnit', 'Unit Testing', 'Integration Testing']
    },
    {
      category: 'Mobile',
      skills: ['Flutter', 'Android']
    }
  ];

  const getSkillColor = (skill: string) => {
    const colors = [
      'bg-blue-500/10 text-blue-600',
      'bg-green-500/10 text-green-600',
      'bg-purple-500/10 text-purple-600',
      'bg-orange-500/10 text-orange-600',
      'bg-red-500/10 text-red-600',
      'bg-teal-500/10 text-teal-600',
      'bg-indigo-500/10 text-indigo-600'
    ];
    const hash = skill.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <section id="skills" className="py-20 bg-muted/20">
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
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-6 shadow-sm border"
            >
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-transform hover:scale-105 ${getSkillColor(skill)}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
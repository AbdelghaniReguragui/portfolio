'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Certifications() {
  const certifications = [
    {
      title: 'Frontend Development',
      issuer: 'Meta',
      description: 'Comprehensive frontend development program covering React, JavaScript, HTML/CSS, and modern web development practices.',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Responsive Design']
    },
    {
      title: 'Programming with JavaScript',
      issuer: 'Meta',
      description: 'Advanced JavaScript programming certification covering ES6+, async programming, and modern JavaScript frameworks.',
      skills: ['JavaScript ES6+', 'Async Programming', 'DOM Manipulation', 'API Integration']
    },
    {
      title: 'HTML and CSS in Depth',
      issuer: 'Meta',
      description: 'Deep dive into HTML5 and CSS3, covering advanced styling techniques, animations, and responsive design principles.',
      skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Animations']
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-xl text-muted-foreground">
            Professional certifications and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold">{cert.title}</h3>
                  <p className="text-sm text-blue-600">{cert.issuer}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-sm">Skills Covered:</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Certificate
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
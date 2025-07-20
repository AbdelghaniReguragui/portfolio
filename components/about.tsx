'use client';

import { motion } from 'framer-motion';
import { Code, Users, Zap } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Specialized in .NET, Java, and microservice architecture with a focus on clean, maintainable code.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Experienced in working with business teams to deliver tailored solutions that meet real-world needs.'
    },
    {
      icon: Zap,
      title: 'Problem Solving',
      description: 'Passionate about tackling complex technical challenges and finding innovative solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Abdelghani is a passionate software developer specializing in designing and building robust applications. 
            He is experienced with .NET, Java, and microservice architecture, and enjoys solving complex technical 
            challenges and working with business teams to deliver tailored solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg mr-4">
                  <highlight.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold">{highlight.title}</h3>
              </div>
              <p className="text-muted-foreground">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
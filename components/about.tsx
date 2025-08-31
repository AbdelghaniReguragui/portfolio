'use client';

import { motion } from 'framer-motion';
import { Code, Users, Zap } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Specialized in .NET, Java, and microservice architecture with a focus on clean, maintainable code.',
      gradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
      iconColor: 'text-white'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Experienced in working with business teams to deliver tailored solutions that meet real-world needs.',
      gradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
      iconColor: 'text-white'
    },
    {
      icon: Zap,
      title: 'Problem Solving',
      description: 'Passionate about tackling complex technical challenges and finding innovative solutions.',
      gradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
      iconColor: 'text-white'
    }
  ];

  return (
    <section id="about" className="bg-muted/20">
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
            I'm a software developer with expertise in designing and building robust software solutions. I specialize in microservices architectures and .NET technologies, with hands-on experience in frontend frameworks such as React and Angular. I'm passionate about tackling complex technical challenges and working closely with business teams to deliver solutions that truly fit their needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden bg-gradient-to-br ${highlight.gradient} rounded-xl p-6 shadow-lg border border-white/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group`}
            >
              {/* Background pattern effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 ${highlight.iconBg} rounded-xl mr-4 shadow-lg`}
                  >
                    <highlight.icon className={`w-6 h-6 ${highlight.iconColor}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-foreground transition-colors">{highlight.title}</h3>
                </div>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors leading-relaxed">{highlight.description}</p>
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
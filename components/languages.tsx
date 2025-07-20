'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export function Languages() {
  const languages = [
    { name: 'Arabic', level: 'Native', proficiency: 100 },
    { name: 'French', level: 'Professional', proficiency: 90 },
    { name: 'English', level: 'Intermediate', proficiency: 75 },
    { name: 'Spanish', level: 'Basic', proficiency: 40 }
  ];

  const getLevelColor = (proficiency: number) => {
    if (proficiency >= 90) return 'bg-green-500';
    if (proficiency >= 70) return 'bg-blue-500';
    if (proficiency >= 50) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  return (
    <section id="languages" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Languages</h2>
          <p className="text-xl text-muted-foreground">
            Multilingual communication abilities
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-background rounded-lg p-6 shadow-sm border"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-blue-500 mr-3" />
                    <h3 className="text-lg font-semibold">{language.name}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">{language.level}</span>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.proficiency}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      viewport={{ once: true }}
                      className={`h-2 rounded-full ${getLevelColor(language.proficiency)}`}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">
                    {language.proficiency}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
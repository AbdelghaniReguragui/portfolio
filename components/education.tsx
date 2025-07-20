'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground">
            Academic background and qualifications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-background rounded-lg p-8 shadow-sm border">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Engineering Degree in Computer Science</h3>
                <h4 className="text-xl text-blue-600 font-semibold mb-4">Université Mundiapolis</h4>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    2019 – 2022
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Casablanca, Morocco
                  </div>
                </div>

                <div className="prose prose-gray max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive engineering program focusing on software development, computer science fundamentals, 
                    and modern programming practices. Gained expertise in software architecture, database design, 
                    web development, and project management methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
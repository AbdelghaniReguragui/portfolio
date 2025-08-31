'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
  return (
  <section id="education" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 dark:text-white">Education</h2>
          <p className="text-xl text-muted-foreground dark:text-gray-300">
            Academic background and qualifications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Engineering Degree */}
          <div className="bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-lg p-8 shadow-sm border dark:border-gray-700">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 dark:text-white">Engineering Degree in Computer Science</h3>
                <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">Université Mundiapolis</h4>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-muted-foreground dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    2019 – 2022
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Casablanca, Morocco
                  </div>
                </div>

                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p className="text-muted-foreground dark:text-gray-300 leading-relaxed mb-4">
                    Advanced studies in software engineering with a strong focus on design patterns, software architectures, best coding practices, and modern frameworks.
                  </p>
                  <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
                    Gained expertise in software development, system design, and project management methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Preparatory Classes */}
          <div className="bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-lg p-8 shadow-sm border dark:border-gray-700">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 bg-green-500/10 dark:bg-green-500/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-green-500 dark:text-green-400" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 dark:text-white">Integrated Preparatory Classes</h3>
                <h4 className="text-xl text-green-600 dark:text-green-400 font-semibold mb-4">Université Mundiapolis</h4>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-muted-foreground dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    2017 – 2019
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Casablanca, Morocco
                  </div>
                </div>

                <div className="prose prose-gray max-w-none dark:prose-invert">
                  <p className="text-muted-foreground dark:text-gray-300 leading-relaxed mb-4">
                    Acquired solid foundations in computer science fundamentals, algorithms, and data structures.
                  </p>
                  <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
                    Practiced programming with multiple languages including C, Java, and other modern languages.
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
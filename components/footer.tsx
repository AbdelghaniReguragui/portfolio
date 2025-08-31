'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-emerald-500" /> by Abdelghani Reguragui
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2025 Abdelghani Reguragui. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
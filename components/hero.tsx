'use client';

import { motion } from 'framer-motion';
import { Download, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Image from 'next/image';

export function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    try {
      const cvUrl = '/cv/Abdelghani_Reguragui_CV.pdf';
      
      // Check if file exists first
      const response = await fetch(cvUrl, { method: 'HEAD' });
      
      if (response.ok) {
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Abdelghani_Reguragui_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        alert('CV file not found. Please contact me directly for my latest CV.');
      }
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('Error downloading CV. Please try again or contact me directly.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Abdelghani Reguragui
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Software Engineer | .NET Enthusiast | Problem Solver
            </motion.p>
            
            <motion.p 
              className="text-lg mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Passionate about designing and building robust applications with expertise in .NET technologies, 
              microservices architecture, and modern frontend frameworks.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={handleGetInTouch}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={handleDownloadCV}
                disabled={isDownloading}
              >
                <Download className="w-4 h-4 mr-2" />
                {isDownloading ? 'Downloading...' : 'Download CV'}
              </Button>
            </motion.div>

            <motion.div 
              className="flex items-center text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Casablanca, Morocco
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative group">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500 to-green-500 p-1 transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:z-50 relative">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/abdelghani-reguragui.jpg"
                    alt="Abdelghani Reguragui"
                    width={600}
                    height={600}
                    quality={100}
                    priority
                    unoptimized
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                    onError={(e) => {
                      // Fallback vers les initiales si l'image n'est pas trouvée
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-muted"><div class="text-6xl font-bold text-muted-foreground">AR</div></div>';
                      }
                    }}
                  />
                </div>
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-2 h-2 bg-white rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const technologies = [
    { name: 'Python', logo: '🐍' },
    { name: 'TensorFlow', logo: '🧠' },
    { name: 'PyTorch', logo: '🔥' },
    { name: 'Next.js', logo: '⚛️' },
    { name: 'Docker', logo: '🐳' },
    { name: 'JavaScript', logo: '💛' },
    { name: 'Computer Vision', logo: '👁️' },
    { name: 'NLP', logo: '💬' },
    { name: 'LangChain', logo: '🔗' },
    { name: 'Hugging Face', logo: '🤗' },
    { name: 'SQL', logo: '🗄️' },
    { name: 'C/C++', logo: '⚡' },
  ];

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 mt-12">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-52 h-52 rounded-full overflow-hidden border-4 border-white shadow-2xl"
          >
            <Image
              src="/harsh.png"
              alt="Harsh Maheshwari"
              fill
              className="object-cover object-[center_20%] scale-110"
              priority
              sizes="(max-width: 768px) 208px, 208px"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Harsh Maheshwari
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-medium">
              AI Engineer & Machine Learning Enthusiast
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about building intelligent systems that solve real-world problems. 
            Currently working as an AI Engineer at Lumeo, specializing in Computer Vision, 
            Deep Learning, and MLOps. 750+ LeetCode problems solved with a 500-day streak!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium"
            >
              Learn More About Me
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex gap-4">
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/harshm2601" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://linkedin.com/in/harshism1" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="pt-12"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 cursor-pointer"
                  >
                    <span className="mr-2 text-lg">{tech.logo}</span>
                    {tech.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={scrollToAbout}
            >
              <ArrowDown className="h-6 w-6 text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

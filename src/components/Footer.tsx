'use client';

import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'LeetCode', href: '#leetcode' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/harshm2601',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/harshism1',
      icon: Linkedin
    },
    {
      name: 'Email',
      href: 'mailto:harshmaheshwari219@gmail.com',
      icon: Mail
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Harsh Maheshwari
              </h3>
              <p className="text-gray-300 mb-4 max-w-md">
                AI Engineer passionate about building intelligent systems that solve real-world problems. 
                Specializing in Computer Vision, Machine Learning, and MLOps.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.div
                      key={social.name}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
                        <Link href={social.href} target="_blank" rel="noopener noreferrer">
                          <Icon className="w-5 h-5" />
                          <span className="sr-only">{social.name}</span>
                        </Link>
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>Gujarat, India</p>
                <p>harshmaheshwari219@gmail.com</p>
                <p>+91 6351012514</p>
                <p className="text-sm text-gray-400 mt-4">
                  Available for remote work and relocation
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-600" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center text-gray-300 text-sm"
          >
            <span>© {currentYear} Harsh Maheshwari. Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-400" />
            <span>using Next.js & shadcn/ui</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-0"
          >
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-white/10"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400">750+</div>
              <div className="text-xs text-gray-400">LeetCode Problems</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">10+</div>
              <div className="text-xs text-gray-400">Projects Built</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">1841</div>
              <div className="text-xs text-gray-400">LeetCode Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">9.12</div>
              <div className="text-xs text-gray-400">CGPA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

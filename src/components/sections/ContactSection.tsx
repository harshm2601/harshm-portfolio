'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Send, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "harshmaheshwari219@gmail.com",
      link: "mailto:harshmaheshwari219@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6351012514",
      link: "tel:+916351012514",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gujarat, India",
      link: "#",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      username: "@harshism1",
      url: "https://linkedin.com/in/harshism1",
      icon: "🔗",
      color: "from-blue-600 to-blue-700",
      description: "Professional networking and career updates"
    },
    {
      name: "GitHub",
      username: "@harshm2601",
      url: "https://github.com/harshm2601",
      icon: "💻",
      color: "from-gray-700 to-gray-900",
      description: "Code repositories and open source contributions"
    },
    {
      name: "LeetCode",
      username: "@harshism",
      url: "https://leetcode.com/harshism",
      icon: "🧠",
      color: "from-orange-500 to-red-500",
      description: "750+ problems solved, 1841 rating, 500-day streak"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - you can integrate with your preferred email service
    console.log('Form submitted:', formData);
    // For now, we'll create a mailto link
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(`Hi Harsh,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`);
    window.open(`mailto:harshmaheshwari219@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let&apos;s connect! I&apos;m always interested in discussing AI, machine learning projects, 
            collaboration opportunities, or just having a great conversation about technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-purple-600" />
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What&apos;s this about?"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..."
                    rows={6}
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Quick Response:</strong> I typically respond within 24 hours. 
                  For urgent matters, feel free to reach out directly via email or LinkedIn.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Direct Contact */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Direct Contact</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Link href={info.link} className="block">
                        <div className="flex items-center p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-200">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} mr-4`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{info.label}</p>
                            <p className="text-gray-600">{info.value}</p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <h4 className="text-lg font-bold text-gray-800 mb-4">🕒 Availability</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Work:</strong> Monday - Friday, 9 AM - 6 PM IST</p>
                <p><strong>Projects:</strong> Available for freelance and collaboration</p>
                <p><strong>Response:</strong> Usually within 24 hours</p>
                <p><strong>Time Zone:</strong> GMT +5:30 (India Standard Time)</p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Connect With Me</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{social.icon}</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{social.name}</h4>
                    <p className="text-gray-600 mb-3">{social.username}</p>
                    <p className="text-sm text-gray-500 mb-4">{social.description}</p>
                    
                    <Button asChild className={`bg-gradient-to-r ${social.color} hover:opacity-90 w-full`}>
                      <Link href={social.url} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Profile
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Let&apos;s Build Something Amazing Together!</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you&apos;re looking for an AI engineer, want to collaborate on a project, 
              or just want to chat about the latest in machine learning and technology, 
              I&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Link href="mailto:harshmaheshwari219@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me Directly
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://linkedin.com/in/harshism1" target="_blank">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

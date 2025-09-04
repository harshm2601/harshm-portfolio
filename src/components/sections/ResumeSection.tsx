'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Download, ExternalLink, Eye, FileText, Mail, Phone, MapPin, Calendar, Briefcase, BookOpen, Target, Award, Trophy } from 'lucide-react';
import Link from 'next/link';

const ResumeSection = () => {
  const contactInfo = {
    name: "Harsh Maheshwari",
    email: "harshmaheshwari219@gmail.com",
    phone: "+91 6351012514",
    location: "Gujarat, India (Willing to Relocate)",
    linkedin: "https://linkedin.com/in/harshism1",
    github: "https://github.com/harshm2601",
    leetcode: "https://leetcode.com/harshism"
  };

  const education = [
    {
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      university: "Charotar University of Science and Technology (CHARUSAT)",
      location: "Changa, Gujarat",
      dates: "2022 – 2026",
      cgpa: "9.12 (Current)",
      highlights: ["Top 5% of class", "Dean's List", "Research Publications"]
    },
    {
      degree: "Higher Secondary",
      university: "GSHSEB",
      location: "Palanpur, Gujarat", 
      dates: "2022",
      cgpa: "Distinction",
      highlights: ["Science Stream", "Mathematics Excellence"]
    }
  ];

  const experience = [
    {
      role: "AI Engineer",
      company: "Lumeo",
      location: "San Francisco, USA",
      dates: "May 2025 – Present",
      type: "Full-time",
      achievements: [
        "Engineered end-to-end, MLOps-driven AI pipelines from data curation to scalable deployment using Zero-shot detection and Vision Language Models",
        "Designed and deployed advanced computer vision and deep learning models, integrating autonomous AI agents for real-time, production-grade performance"
      ]
    },
    {
      role: "AI Intern",
      company: "Ziguratss LLP",
      location: "Delhi, India",
      dates: "May 2024 – Aug 2024",
      type: "Internship",
      achievements: [
        "Developed AI-based solutions for face recognition and anti-spoofing in attendance systems using computer vision techniques",
        "Built applications for generating descriptive content from images and visualizing paintings on walls using deep learning models"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "C/C++", "SQL", "JavaScript"],
    "AI/ML Frameworks": ["TensorFlow", "PyTorch", "Hugging Face", "LangChain"],
    "Technologies": ["Computer Vision", "NLP", "Generative AI", "AI Agents", "MLOps", "RAG"],
    "Web Development": ["Next.js", "React", "Node.js", "Docker"]
  };

  const certifications = [
    "Deep Learning – 87/100 (Top 5%) – NPTEL IIT Ropar",
    "Machine Learning – 90/100 (Top 2%) – NPTEL IIT KGP",
    "Deep Learning for NLP – 72/100 (Top 5%) – NPTEL IIT KGP",
    "Machine Learning Specialization – Deeplearning.ai, Coursera",
    "Data Structures and Algorithms – 75/100 – NPTEL IIT KGP",
    "Database Management System – 80/100 (Top 2%) – NPTEL IIT KGP"
  ];

  const achievements = [
    "Research Publication: 'Enhancing Human Detection and Counting Efficiency Through Deep Learning' – ICRAIC 2024",
    "Invited Speaker: Delivered 'AI Frontiers' talk to 150+ students at CHARUSAT",
    "Meesho Data Challenge 2024: Ranked 23rd among 196 teams",
    "Amazon ML Challenge: 64th rank out of 75,000 participants",
    "LeetCode: 750+ problems solved, 1841 rating, 500-day streak",
    "2X NPTEL Topper in Machine Learning and Database Management"
  ];

  const downloadResume = () => {
    // This would normally trigger a PDF download
    console.log('Downloading resume...');
    // You can implement actual PDF download logic here
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive overview of my professional experience, education, and achievements
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={downloadResume}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF Resume
            </Button>
            <Button variant="outline" size="lg">
              <Eye className="w-5 h-5 mr-2" />
              View Online Version
            </Button>
          </div>
        </motion.div>

        {/* Resume Content */}
        <div className="max-w-4xl mx-auto">
          {/* Header/Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">{contactInfo.name}</h1>
                <p className="text-xl text-blue-600 font-medium mb-4">AI Engineer & Machine Learning Enthusiast</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{contactInfo.location}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <Link href={contactInfo.linkedin} target="_blank" className="hover:text-blue-600">
                      LinkedIn
                    </Link>
                    <Link href={contactInfo.github} target="_blank" className="hover:text-blue-600">
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-blue-600" />
                Professional Experience
              </h2>
              
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{exp.role}</h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600">{exp.location}</p>
                        <p className="text-gray-500">{exp.dates}</p>
                        <Badge variant="outline" className="mt-1">{exp.type}</Badge>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-700 flex items-start">
                          <span className="text-blue-500 mr-2 mt-1.5 text-xs">●</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    {index < experience.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
                Education
              </h2>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{edu.degree}</h3>
                        <p className="text-blue-600 font-medium">{edu.university}</p>
                        <p className="text-gray-600">{edu.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500">{edu.dates}</p>
                        <Badge className="mt-1 bg-green-100 text-green-800">CGPA: {edu.cgpa}</Badge>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-4">
                      {edu.highlights.map((highlight, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    {index < education.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Skills & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-blue-600" />
                Technical Skills
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, items], index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item, i) => (
                        <Badge key={i} variant="secondary" className="bg-blue-50 text-blue-700">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-blue-600" />
                Certifications
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Trophy className="w-6 h-6 mr-3 text-blue-600" />
                Key Achievements
              </h2>
              
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-1">🏆</span>
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Get My Complete Resume</h3>
              <p className="text-gray-600 mb-6">
                Download the full PDF version with detailed project descriptions and references
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={downloadResume}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF Resume
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="mailto:harshmaheshwari219@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Request Latest Version
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

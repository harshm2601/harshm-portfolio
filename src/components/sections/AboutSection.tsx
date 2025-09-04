'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award, BookOpen, Users, Target, Trophy } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
  const experiences = [
    {
      role: "AI Engineer",
      company: "Lumeo",
      location: "San Francisco, USA",
      dates: "May 2025 – Present",
      achievements: [
        "Engineered end-to-end, MLOps-driven AI pipelines from data curation to scalable deployment using Zero-shot detection and Vision Language Models.",
        "Designed and deployed advanced computer vision and deep learning models, integrating autonomous AI agents for real-time, production-grade performance."
      ]
    },
    {
      role: "AI Intern",
      company: "Ziguratss LLP",
      location: "Delhi, India", 
      dates: "May 2024 – Aug 2024",
      achievements: [
        "Developed AI-based solutions for face recognition and anti-spoofing in attendance systems using computer vision techniques.",
        "Built applications for generating descriptive content from images and visualizing paintings on walls using deep learning models."
      ]
    }
  ];

  const achievements = [
    {
      title: "Research Publication",
      icon: BookOpen,
      description: "Published paper on &apos;Enhancing Human Detection and Counting Efficiency Through Deep Learning&apos; at ICRAIC 2024"
    },
    {
      title: "Invited Speaker",
      icon: Users,
      description: "Delivered &apos;AI Frontiers: Unlocking the Future with RAG, GANs & YOLO&apos; to 150+ students at CHARUSAT"
    },
    {
      title: "Competitive Programming",
      icon: Award,
      description: "750+ LeetCode problems solved with 1841 rating and 500-day streak"
    },
    {
      title: "Hackathon Excellence",
      icon: Target,
      description: "23rd rank in Meesho Data Challenge, 64th in Amazon ML Challenge out of 75,000 participants"
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "C/C++", "SQL", "JavaScript"],
    "AI/ML Frameworks": ["TensorFlow", "PyTorch", "Hugging Face", "LangChain"],
    "Technologies": ["Computer Vision", "NLP", "Generative AI", "AI Agents", "MLOps", "RAG"],
    "Web Development": ["Next.js", "React", "Node.js", "Docker"],
    "Certifications": [
      "Deep Learning – 87/100 (Top 5%) – NPTEL IIT Ropar",
      "Machine Learning – 90/100 (Top 2%) – NPTEL IIT KGP",
      "Machine Learning Specialization – Deeplearning.ai"
    ]
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate AI Engineer with expertise in Machine Learning, Computer Vision, and building intelligent systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <div className="text-center space-y-6">
                <div className="relative mx-auto w-64 h-80 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/harsh.png"
                    alt="Harsh Maheshwari"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 256px, 256px"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-800">Harsh Maheshwari</h3>
                  <div className="flex items-center justify-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Gujarat, India</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Available for Relocation</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional Journey</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                I&apos;m a passionate AI Engineer currently working at Lumeo in San Francisco, where I build cutting-edge 
                computer vision and machine learning solutions. My journey in AI began during my B.Tech in Artificial 
                Intelligence & Machine Learning at CHARUSAT, where I&apos;ve maintained a stellar 9.12 CGPA.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                My expertise spans across Computer Vision, Natural Language Processing, Generative AI, and MLOps. 
                I&apos;ve published research papers, delivered technical talks to 150+ students, and consistently ranked 
                in top percentiles in national competitions. With 750+ LeetCode problems solved and a 500-day streak, 
                I combine strong algorithmic thinking with practical AI implementation skills.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 Vision & Passion</h4>
                  <p className="text-gray-600">
                    Building AI systems that solve real-world problems and make technology accessible to everyone.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🚀 Current Focus</h4>
                  <p className="text-gray-600">
                    MLOps, Computer Vision, AI Agents, and deploying scalable AI solutions in production.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Work Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{exp.role}</h4>
                      <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">{exp.location}</p>
                      <p className="text-gray-500">{exp.dates}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-700 flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills & Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg h-full">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">{category}</h4>
                  <div className="space-y-2">
                    {items.map((item, i) => (
                      <Badge key={i} variant="secondary" className="mr-2 mb-2 bg-blue-50 text-blue-700 hover:bg-blue-100">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h4>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

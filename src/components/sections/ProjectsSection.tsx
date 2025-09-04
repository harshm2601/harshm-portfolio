'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Globe, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectsSection = () => {
  const featuredProject = {
    title: "Swasthify",
    description: "A comprehensive smart health tracker that analyzes daily meals through text and image inputs to provide detailed calorie breakdowns, nutrient insights, and personalized food and exercise recommendations.",
    longDescription: "Built using advanced AI technologies including Vision Transformers and AI agent-based pipelines, Swasthify automates food recognition and generates real-time, personalized health plans. The application leverages Crew.ai for multi-agent coordination and LangChain for intelligent data processing.",
    stack: ["Python", "Streamlit", "Crew.ai", "LangChain", "Vision Transformer", "AI Agents"],
    link: "https://swasthify-r4qy.vercel.app/",
    github: "https://github.com/harshm2601/Swasthify",
    image: "/swasthify.png", // Add swasthify.png to public folder
    featured: true,
    // status: "🚀 Live & Featured"
  };

  const projects = [
    {
      title: "Voice Cloning System",
      description: "Advanced voice synthesis system capable of generating high-fidelity speech that mimics specific voices with natural precision.",
      stack: ["Python", "HifiGAN", "WaveGlow", "Deep Learning"],
      link: "https://github.com/harshm2601/Voice-Cloning-System",
      linkType: "github",
      highlights: ["Speaker adaptation methodologies", "High-fidelity speech synthesis", "Natural voice mimicking"]
    },
    {
      title: "LeetCode Fine-Tuned CodeLLaMA",
      description: "Fine-tuned CodeLLaMA 7B model on curated LeetCode problem-solution pairs for enhanced competitive programming code generation.",
      stack: ["HuggingFace", "Transformers", "LoRA", "Python"],
      link: "https://huggingface.co/harshism1/codellama-leetcode-finetuned",
      linkType: "huggingface",
      highlights: ["7B parameter model", "LeetCode optimization", "Competitive programming focus"]
    },
    {
      title: "SheetMinds",
      description: "AI-powered data analysis agent enabling natural language queries on CSV/Excel files with automated chart generation and insights.",
      stack: ["Python", "LangChain", "Pandas", "Matplotlib", "AI Agents"],
      link: "https://github.com/harshm2601/SheetMinds",
      linkType: "github",
      highlights: ["Natural language processing", "Secure sandbox execution", "Dynamic visualization"]
    },
    {
      title: "Amazon ML Hackathon 2024",
      description: "Vision-language model solution for product attribute extraction from images, achieving 64th rank among 75,000+ participants.",
      stack: ["Vision-Language Model", "MiniCPM-Llama3-V-2.5", "Distributed Processing"],
      link: "https://github.com/harshm2601/Amazon-ML-Hackathon-2024",
      linkType: "github",
      highlights: ["Top 64 out of 75K", "15 GPU distributed processing", "E-commerce applications"]
    },
    {
      title: "Smart Retail Face Recognition",
      description: "Real-time face recognition system for retail environments with customer identification and automatic registration capabilities.",
      stack: ["Computer Vision", "Python", "OpenCV", "Deep Learning"],
      link: "https://github.com/harshm2601/smart-retail-face-recognition",
      linkType: "github",
      highlights: ["Real-time processing", "Customer analytics", "Multiple recognition approaches"]
    },
    {
      title: "News-Based Stock Prediction",
      description: "Financial prediction system combining news sentiment analysis with stock data using FinBERT and LSTM models.",
      stack: ["FinBERT", "LSTM", "Python", "NLP", "Time Series"],
      link: "https://github.com/harshm2601/News-Based-Stock-Index-Prediction",
      linkType: "github",
      highlights: ["Sentiment analysis", "Financial data integration", "Predictive modeling"]
    },
    {
      title: "Attendance and Facility Management System",
      description: "Web-based platform for managing attendance, task assignments, and leave approvals with facial recognition integration.",
      stack: ["Web Development", "Facial Recognition", "Dashboard", "Management System"],
      link: "https://github.com/harshm2601/Attendance-and-FMS-system",
      linkType: "github",
      highlights: ["Employee dashboards", "Manager analytics", "Performance tracking"]
    },
    {
      title: "Meesho Visual Taxonomy Challenge",
      description: "Image attribute prediction solution for e-commerce cataloging, achieving 23rd rank among 196 teams.",
      stack: ["Image Processing", "E-commerce", "Computer Vision", "ML"],
      link: "https://github.com/harshm2601/Meesho-Visual-Taxonomy-Data-Challenge",
      linkType: "github",
      highlights: ["Team ML Maverick", "23rd rank", "E-commerce optimization"]
    },
    {
      title: "People Detection & Crowd Counting",
      description: "YOLOv8-based human detection and counting solution optimized for classroom environments.",
      stack: ["YOLOv8", "Computer Vision", "Object Detection", "Deep Learning"],
      link: "https://github.com/harshm2601/People-Detection-Crowd-Counting",
      linkType: "github",
      highlights: ["YOLOv8 fine-tuning", "Classroom optimization", "Real-time counting"]
    }
  ];

  const getLinkIcon = (linkType: string) => {
    switch (linkType) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'huggingface':
        return <Star className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  const getLinkLabel = (linkType: string) => {
    switch (linkType) {
      case 'github':
        return 'View Code';
      case 'huggingface':
        return 'HuggingFace';
      default:
        return 'View Project';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work in AI, Machine Learning, and Full-Stack Development
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Project Image/Demo */}
              <div className="relative overflow-hidden bg-gray-100 flex items-center justify-center min-h-[400px]">
                <Image
                  src="/swasthify.png"
                  alt="Swasthify App Screenshot"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12">
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{featuredProject.title}</h3>
                  <p className="text-lg text-gray-600 mb-4">{featuredProject.description}</p>
                  <p className="text-gray-700 leading-relaxed mb-6">{featuredProject.longDescription}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.stack.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Link href={featuredProject.link} target="_blank">
                      <Globe className="w-4 h-4 mr-2" />
                      View Live App
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={featuredProject.github} target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </div>

                  {project.highlights && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 text-sm mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-500 mr-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.stack.slice(0, 3).map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.stack.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.stack.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={project.link} target="_blank">
                        {getLinkIcon(project.linkType)}
                        <span className="ml-2">{getLinkLabel(project.linkType)}</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com/harshm2601" target="_blank">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Mail } from 'lucide-react';
import Link from 'next/link';

const ResumeSection = () => {
  const downloadResume = () => {
    // Create a temporary link to download the PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Harsh_Maheshwari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openResumeInNewTab = () => {
    window.open('/resume.pdf', '_blank');
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
            View and download my complete professional resume
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              onClick={downloadResume}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={openResumeInNewTab}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Open in New Tab
            </Button>
          </div>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <div className="aspect-[8.5/11] w-full">
              <iframe
                src="/resume.pdf"
                className="w-full h-full border-0 rounded-lg"
                title="Harsh Maheshwari Resume"
                style={{ minHeight: '800px' }}
              >
                <p>
                  Your browser does not support PDFs. 
                  <Link href="/resume.pdf" target="_blank" className="text-blue-600 hover:underline">
                    Click here to download the PDF
                  </Link>
                </p>
              </iframe>
            </div>
          </Card>
        </motion.div>

        {/* Alternative Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Get My Complete Resume</h3>
            <p className="text-gray-600 mb-6">
              Download the complete PDF version or request the latest version via email
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
                <Link href="mailto:harshmaheshwari219@gmail.com?subject=Resume Request">
                  <Mail className="w-5 h-5 mr-2" />
                  Request Latest Version
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;

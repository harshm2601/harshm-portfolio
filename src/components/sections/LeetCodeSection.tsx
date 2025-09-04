'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Trophy, Calendar, TrendingUp, Code, Star } from 'lucide-react';
import Link from 'next/link';

const LeetCodeSection = () => {
  const stats = [
    {
      label: "Problems Solved",
      value: "750+",
      icon: Code,
      color: "from-green-500 to-emerald-600"
    },
    {
      label: "Current Rating",
      value: "1841",
      icon: Star,
      color: "from-yellow-500 to-orange-500"
    },
    {
      label: "Longest Streak",
      value: "500 Days",
      icon: Calendar,
      color: "from-blue-500 to-cyan-500"
    },
    {
      label: "Contest Ranking",
      value: "Top 15%",
      icon: Trophy,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const achievements = [
    {
      title: "500-Day Streak Badge",
      description: "Maintained consistent daily problem-solving for over 500 days",
      icon: "🔥",
      date: "2024"
    },
    {
      title: "1800+ Rating",
      description: "Achieved and maintained rating above 1800 in contests",
      icon: "⭐",
      date: "2024"
    },
    {
      title: "750+ Problems",
      description: "Solved diverse range of algorithmic challenges",
      icon: "🎯",
      date: "2024"
    },
    {
      title: "Contest Regular",
      description: "Active participant in weekly and biweekly contests",
      icon: "🏆",
      date: "Ongoing"
    }
  ];

  const skillBreakdown = [
    { category: "Array & Strings", solved: 180, total: 200 },
    { category: "Dynamic Programming", solved: 95, total: 120 },
    { category: "Trees & Graphs", solved: 150, total: 180 },
    { category: "Linked Lists", solved: 45, total: 50 },
    { category: "Backtracking", solved: 35, total: 45 },
    { category: "Greedy", solved: 60, total: 75 },
    { category: "Binary Search", solved: 40, total: 50 },
    { category: "Heap/PriorityQueue", solved: 30, total: 40 }
  ];

  return (
    <section id="leetcode" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            LeetCode Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my competitive programming journey and algorithmic problem-solving skills
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
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
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* LeetCode Profile Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-lg mr-3">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                Profile Highlights
              </h3>
              
              {/* Mock LeetCode Profile Image */}
              <div className="mb-6 p-6 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl border-2 border-green-200">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <h4 className="text-xl font-bold text-gray-800">harshism</h4>
                  <p className="text-gray-600">LeetCode Profile</p>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-2xl font-bold text-green-600">750+</div>
                      <div className="text-gray-600">Solved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">1841</div>
                      <div className="text-gray-600">Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100"
                  >
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <h5 className="font-semibold text-gray-800">{achievement.title}</h5>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {achievement.date}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6">
                <Button asChild className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                  <Link href="https://leetcode.com/harshism" target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Full Profile
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Skills Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg mr-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                Skills Breakdown
              </h3>

              <div className="space-y-4">
                {skillBreakdown.map((skill, index) => {
                  const percentage = Math.round((skill.solved / skill.total) * 100);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill.category}</span>
                        <span className="text-sm text-gray-600">
                          {skill.solved}/{skill.total}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percentage}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                        />
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            percentage >= 80 ? 'border-green-500 text-green-700' :
                            percentage >= 60 ? 'border-blue-500 text-blue-700' :
                            'border-orange-500 text-orange-700'
                          }`}
                        >
                          {percentage}%
                        </Badge>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-gray-800 mb-2">💡 Problem Solving Philosophy</h4>
                <p className="text-sm text-gray-600">
                  I focus on understanding the underlying patterns and algorithms rather than just solving problems. 
                  My 500-day streak reflects my commitment to continuous learning and improvement in algorithmic thinking.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Recent Activity Mock */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contest Performance & Journey</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">Weekly</div>
                <p className="text-gray-600">Regular participant in weekly contests</p>
                <Badge className="mt-2 bg-green-100 text-green-800">Active</Badge>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Bi-weekly</div>
                <p className="text-gray-600">Consistent performance improvement</p>
                <Badge className="mt-2 bg-blue-100 text-blue-800">Growing</Badge>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Monthly</div>
                <p className="text-gray-600">Top percentile rankings</p>
                <Badge className="mt-2 bg-purple-100 text-purple-800">Excellence</Badge>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                My LeetCode journey represents more than just problem-solving—it&apos;s about developing 
                analytical thinking, pattern recognition, and the persistence needed for complex AI challenges.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link href="https://leetcode.com/harshism" target="_blank">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Explore My LeetCode Profile
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCodeSection;

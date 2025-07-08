import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, RefreshCw, ExternalLink } from 'lucide-react';

const username = 'arpita_27'; // Your LeetCode username

const LeetCode: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [stats, setStats] = useState({
    totalSolved: 83,
    easySolved: 38,
    mediumSolved: 40,
    hardSolved: 5,
    lastUpdated: new Date()
  });

  const [animatedStats, setAnimatedStats] = useState({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0
  });

  const [isRefreshing, setIsRefreshing] = useState(false);

  const [maxStats, setMaxStats] = useState({
    total: 600,
    easy: 0,
    medium: 0,
    hard: 0
  });

  // Fetch real LeetCode data from profile
  const fetchLeetCodeStats = async () => {
    setIsRefreshing(true);
    try {
      console.log('Fetching LeetCode stats...'); // Debug log
      // Use the alfa-leetcode-api to fetch stats
      const response = await fetch('https://alfa-leetcode-api.onrender.com/arpita_27/solved');
      if (!response.ok) {
        throw new Error('Failed to fetch LeetCode data');
      }
      const data = await response.json();
      console.log('API Response:', data); // Debug log
      // The API returns { solvedProblem, easySolved, mediumSolved, hardSolved }
      const finalStats = {
        totalSolved: data.solvedProblem || 0,
        easySolved: data.easySolved || 0,
        mediumSolved: data.mediumSolved || 0,
        hardSolved: data.hardSolved || 0,
        lastUpdated: new Date()
      };
      console.log('Final stats:', finalStats); // Debug log
      setStats(finalStats);
      localStorage.setItem('leetcodeStats', JSON.stringify(finalStats));
      localStorage.setItem('leetcodeLastFetch', Date.now().toString());

      // Fetch total questions for each difficulty
      const totalQRes = await fetch('https://alfa-leetcode-api.onrender.com/totalQuestions');
      if (totalQRes.ok) {
        const totalQData = await totalQRes.json();
        if (totalQData.data && totalQData.data.allQuestionsCount) {
          const all = totalQData.data.allQuestionsCount.find((q: any) => q.difficulty === 'All')?.count || 600;
          const easy = totalQData.data.allQuestionsCount.find((q: any) => q.difficulty === 'Easy')?.count || 0;
          const medium = totalQData.data.allQuestionsCount.find((q: any) => q.difficulty === 'Medium')?.count || 0;
          const hard = totalQData.data.allQuestionsCount.find((q: any) => q.difficulty === 'Hard')?.count || 0;
          setMaxStats({ total: all, easy, medium, hard });
        }
      }
    } catch (error) {
      console.error('Error fetching LeetCode stats:', error);
      // Fallback to cached data or default values
      const savedStats = localStorage.getItem('leetcodeStats');
      if (savedStats) {
        try {
          const parsedStats = JSON.parse(savedStats);
          setStats({
            ...parsedStats,
            lastUpdated: new Date(parsedStats.lastUpdated)
          });
        } catch (parseError) {
          console.error('Error parsing saved stats:', parseError);
        }
      }
    } finally {
      setIsRefreshing(false);
    }
  };

  // Auto-refresh every 24 hours
  useEffect(() => {
    // Force fetch on component mount
    fetchLeetCodeStats();
    
    // Set up interval for auto-refresh every 24 hours
    const twentyFourHours = 24 * 60 * 60 * 1000;
    const interval = setInterval(fetchLeetCodeStats, twentyFourHours);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (inView) {
      console.log('LeetCode stats:', stats); // Debug log
      // Animate counters
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setAnimatedStats({
          totalSolved: Math.floor(stats.totalSolved * easeOutQuart),
          easySolved: Math.floor(stats.easySolved * easeOutQuart),
          mediumSolved: Math.floor(stats.mediumSolved * easeOutQuart),
          hardSolved: Math.floor(stats.hardSolved * easeOutQuart)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setAnimatedStats({
            totalSolved: stats.totalSolved,
            easySolved: stats.easySolved,
            mediumSolved: stats.mediumSolved,
            hardSolved: stats.hardSolved
          });
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [inView, stats]);

  const CircularProgress = ({ 
    value, 
    max, 
    size = 180, 
    strokeWidth = 12, 
    color = "purple", 
    label, 
    count,
    isMain = false 
  }: {
    value: number;
    max: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    label: string;
    count: number;
    isMain?: boolean;
  }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const percentage = (value / max) * 100;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const colorMap = {
      purple: { stroke: '#a855f7', glow: 'rgba(168, 85, 247, 0.4)', bg: 'rgba(168, 85, 247, 0.1)' },
      green: { stroke: '#10b981', glow: 'rgba(16, 185, 129, 0.4)', bg: 'rgba(16, 185, 129, 0.1)' },
      yellow: { stroke: '#f59e0b', glow: 'rgba(245, 158, 11, 0.4)', bg: 'rgba(245, 158, 11, 0.1)' },
      red: { stroke: '#ef4444', glow: 'rgba(239, 68, 68, 0.4)', bg: 'rgba(239, 68, 68, 0.1)' }
    };

    return (
      <motion.div
        className="relative flex flex-col items-center group"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: isMain ? 0.2 : 0.6 }}
        whileHover={{ 
          scale: isMain ? 1.05 : 1.1,
          y: -10
        }}
      >
        {/* Container with proper spacing and background */}
        <div className={`relative ${isMain ? 'w-80 h-80 p-6' : 'w-64 h-64 p-4'} bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl transition-all duration-300 group-hover:border-purple-500/40 group-hover:shadow-2xl group-hover:shadow-purple-500/20`}>
          {/* Background circle */}
          <svg
            className="transform -rotate-90 w-full h-full"
            width={isMain ? 272 : 224}
            height={isMain ? 272 : 224}
          >
            {/* Outer glow circle */}
            <circle
              cx={(isMain ? 272 : 224) / 2}
              cy={(isMain ? 272 : 224) / 2}
              r={isMain ? 120 : radius + 8}
              stroke={colorMap[color as keyof typeof colorMap].bg}
              strokeWidth={isMain ? 20 : strokeWidth + 4}
              fill="transparent"
              className="transition-all duration-300 group-hover:stroke-opacity-50"
            />
            
            {/* Background circle */}
            <circle
              cx={(isMain ? 272 : 224) / 2}
              cy={(isMain ? 272 : 224) / 2}
              r={isMain ? 112 : radius}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth={isMain ? 16 : strokeWidth}
              fill="transparent"
            />
            
            {/* Progress circle */}
            <motion.circle
              cx={(isMain ? 272 : 224) / 2}
              cy={(isMain ? 272 : 224) / 2}
              r={isMain ? 112 : radius}
              stroke={colorMap[color as keyof typeof colorMap].stroke}
              strokeWidth={isMain ? 16 : strokeWidth}
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={isMain ? 704 : strokeDasharray}
              initial={{ strokeDashoffset: isMain ? 704 : circumference }}
              animate={inView ? { 
                strokeDashoffset: isMain 
                  ? 704 - (percentage / 100) * 704 
                  : strokeDashoffset 
              } : {}}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              style={{
                filter: `drop-shadow(0 0 8px ${colorMap[color as keyof typeof colorMap].glow})`
              }}
              className="transition-all duration-300 group-hover:drop-shadow-lg"
            />
          </svg>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              className={`text-white font-bold ${isMain ? 'text-5xl' : 'text-3xl'} mb-1 transition-all duration-300 group-hover:text-2xl`}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              {count}
            </motion.div>
            <div className={`text-gray-400 ${isMain ? 'text-lg' : 'text-sm'} text-center font-medium transition-all duration-300 group-hover:text-white`}>
              {label}
            </div>
            <motion.div
              className={`text-${color === 'purple' ? 'purple' : color === 'green' ? 'green' : color === 'yellow' ? 'yellow' : 'red'}-400 font-semibold ${isMain ? 'text-xl' : 'text-sm'} mt-1 transition-all duration-300 group-hover:scale-110`}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
            >
              {Math.round(percentage)}%
            </motion.div>
          </div>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 bg-${color === 'purple' ? 'purple' : color === 'green' ? 'green' : color === 'yellow' ? 'yellow' : 'red'}-400 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:opacity-100`}
              style={{
                left: `${24 + Math.cos(i * 60 * Math.PI / 180) * (isMain ? 100 : 70)}px`,
                top: `${24 + Math.sin(i * 60 * Math.PI / 180) * (isMain ? 100 : 70)}px`
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
        
        {/* Hover tooltip */}
        <motion.div
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20"
          initial={{ y: 10 }}
          whileHover={{ y: 0 }}
        >
          {label}: {count}/{max} ({Math.round(percentage)}%)
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45"></div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="leetcode" className="min-h-screen py-20 relative">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              LeetCode Progress
            </h2>
            <motion.button
              onClick={fetchLeetCodeStats}
              disabled={isRefreshing}
              className="p-3 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors border border-purple-500/30 disabled:opacity-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={isRefreshing ? { rotate: 360 } : {}}
                transition={{ duration: 1, repeat: isRefreshing ? Infinity : 0, ease: "linear" }}
              >
                <RefreshCw size={20} />
              </motion.div>
            </motion.button>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Problem-solving progress with automatic daily updates
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Last updated: {stats.lastUpdated.toLocaleDateString()} at {stats.lastUpdated.toLocaleTimeString()}
          </p>
        </motion.div>

        {/* Circular Progress Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Main Total Problems Circle */}
          <div className="flex justify-center mb-24">
            <CircularProgress
              value={animatedStats.totalSolved}
              max={maxStats.total}
              color="purple"
              label="Total Problems"
              count={animatedStats.totalSolved}
              isMain={true}
            />
          </div>

          {/* Difficulty Breakdown - Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20 mb-16 px-4">
            <div className="flex justify-center">
              <CircularProgress
                value={animatedStats.easySolved}
                max={maxStats.easy}
                color="green"
                label="Easy"
                count={animatedStats.easySolved}
              />
            </div>

            <div className="flex justify-center">
              <CircularProgress
                value={animatedStats.mediumSolved}
                max={maxStats.medium}
                color="yellow"
                label="Medium"
                count={animatedStats.mediumSolved}
              />
            </div>

            <div className="flex justify-center">
              <CircularProgress
                value={animatedStats.hardSolved}
                max={maxStats.hard}
                color="red"
                label="Hard"
                count={animatedStats.hardSolved}
              />
            </div>
          </div>

          {/* Profile Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <motion.a
              href={`https://leetcode.com/u/${username}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              {/* Glowing particles */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${10 + i * 10}%`,
                      top: `${20 + (i % 3) * 20}%`
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                  />
                ))}
              </motion.div>
              
              <Code size={24} className="relative z-10" />
              <span className="relative z-10 text-lg">View LeetCode Profile</span>
              <ExternalLink size={20} className="relative z-10" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeetCode;
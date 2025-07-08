import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    // Create a dummy resume file for demo
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would replace this with actual resume file
    link.download = 'Aditya_Sharma_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8">
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {React.useMemo(() => [...Array(6)], []).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 relative w-full max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse leading-tight"
          style={{
            textShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
            filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.3))'
          }}
        >
          <motion.span
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: 'linear-gradient(45deg, #a855f7, #ec4899, #06b6d4, #a855f7)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Arpita Maurya
          </motion.span>
          
          {/* Floating letters effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {React.useMemo(() => [...Array(4)], []).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full"
                style={{
                  left: `${10 + i * 18}%`,
                  top: `${20 + Math.sin(i) * 20}%`
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base xs:text-lg md:text-2xl text-gray-300 mb-8 max-w-xl mx-auto px-2 sm:px-0"
        >
          <motion.span
            animate={{
              color: ['#d1d5db', '#a855f7', '#06b6d4', '#d1d5db']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Electronics & Communications Engineering Student
          </motion.span>
          <br />
          <motion.span 
            className="text-purple-400"
            animate={{
              textShadow: [
                '0 0 10px rgba(168, 85, 247, 0.5)',
                '0 0 20px rgba(168, 85, 247, 0.8)',
                '0 0 10px rgba(168, 85, 247, 0.5)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            NIT Silchar • Machine Learning Enthusiast
          </motion.span>
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={handleDownloadResume}
          className="group relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-xs sm:text-sm overflow-hidden w-full max-w-[110px] mx-auto"
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 40px rgba(168, 85, 247, 0.6)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
          
          {/* Enhanced floating particles in button */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
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
                  scale: [0, 1.5, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </motion.div>
          
          <span className="relative flex items-center gap-2">
            <motion.div
              whileHover={{
                rotate: [0, -10, 10, 0],
                scale: 1.1
              }}
              transition={{ duration: 0.5 }}
            >
              <Download size={20} />
            </motion.div>
            Resume
          </span>
          
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(168, 85, 247, 0.4)',
                '0 0 40px rgba(168, 85, 247, 0.8)',
                '0 0 20px rgba(168, 85, 247, 0.4)'
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.button>
      </div>

      {/* Enhanced floating geometric shapes - hide on xs screens */}
      <motion.div
        className="hidden sm:block absolute top-1/4 left-1/4 w-20 h-20 border-2 border-purple-400 rotate-45 opacity-60"
        animate={{ 
          rotate: [45, 225, 405],
          scale: [1, 1.2, 1],
          borderColor: ['#a855f7', '#06b6d4', '#ec4899', '#a855f7']
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      <motion.div
        className="hidden sm:block absolute bottom-1/4 right-1/4 w-16 h-16 border-2 border-cyan-400 rounded-full opacity-60"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.3, 1],
          borderColor: ['#06b6d4', '#a855f7', '#ec4899', '#06b6d4']
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div
        className="hidden sm:block absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-lg opacity-70"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 1.4, 1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </section>
  );
};

export default Hero;
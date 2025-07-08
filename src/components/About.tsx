import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import aboutMeImg from '../aboutme.jpg';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Glowing background circles */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 blur-xl animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-400/20 to-cyan-400/20 blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-lg border border-purple-500/30 flex items-center justify-center relative">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-600/30 flex items-center justify-center">
                    <img src={aboutMeImg} alt="About Me" className="w-48 h-48 object-cover rounded-full shadow-lg relative z-10" />
                  </div>
                </div>
                
                {/* Faster rotating border */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-purple-400/50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Additional rotating rings */}
                <motion.div
                  className="absolute inset-4 rounded-full border border-cyan-400/40"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-8 rounded-full border border-pink-400/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-left"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi, I’m Arpita Maurya — an engineering student with a passion for solving problems, building purposeful tech, and constantly exploring new domains. From developing websites to diving deep into DSA and machine learning, I love turning ideas into impact. Whether it's contributing to club activities, managing events, or learning late into the night, I believe in showing up with curiosity and consistency. I’m driven by growth, collaboration, and the belief that small steps lead to meaningful change.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Github, Database, Code2, FileCode, TerminalSquare, Cloud,
  GitBranch, Braces, FileText, Flame, Zap, BarChart2, BookOpen,
  Layers, Palette, Globe, PenTool, Server, CloudCog,
} from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Languages',
      icon: Braces,
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'C++', icon: Code2, color: '#61dafb' },
        { name: 'C', icon: TerminalSquare, color: '#3178c6' },
        { name: 'Python', icon: FileCode, color: '#3776ab' },
        { name: 'SQL', icon: Database, color: '#06b6d4' },
        { name: 'JavaScript', icon: FileCode, color: '#f7df1e' },
        { name: 'HTML/CSS', icon: Globe, color: '#e34f26' }
      ]
    },
    {
      title: 'Platforms',
      icon: Layers,
      gradient: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Github', icon: Github, color: '#181717' },
        { name: 'Jupyter Notebook', icon: BookOpen, color: '#f37626' },
        { name: 'Google Collab', icon: CloudCog, color: '#f9ab00' },
        { name: 'Google Cloud', icon: Cloud, color: '#4285f4' }
      ]
    },
    {
      title: 'Machine Learning',
      icon: Flame,
      gradient: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Pandas', icon: BookOpen, color: '#150458' },
        { name: 'NumPy', icon: BarChart2, color: '#013243' },
        { name: 'Deep Learning', icon: Zap, color: '#ff6f00' },
        { name: 'Generative AI', icon: Flame, color: '#ee4c2c' },
      ]
    },
    {
      title: 'Additional Tools',
      icon: Palette,
      gradient: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', icon: GitBranch, color: '#f05032' },
        { name: 'MySQL', icon: Database, color: '#00758f' },
        { name: 'Canva', icon: Palette, color: '#2496ed' },
        { name: 'AWS', icon: Cloud, color: '#ff9900' },
        { name: 'VS Code', icon: Code2, color: '#007acc' },
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        {React.useMemo(() => [...Array(6)], []).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Skills & Technologies
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive technical expertise across modern development stack and emerging technologies
          </p>
        </motion.div>

        {/* Skills Categories Grid - 2x2 Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: categoryIndex * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-lg border border-purple-500/30 rounded-xl p-8 h-full"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 2,
                    rotateX: 2,
                    z: 20,
                    translateY: -5,
                    boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3), 0 0 30px rgba(139, 92, 246, 0.2)'
                  }}
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-8">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl mr-4 shadow-lg`}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -10, 10, 0]
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <CategoryIcon size={28} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse" style={{ textShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)' }}>{category.title}</h3>
                  </div>

                  {/* Skills Grid - 3x2 Layout */}
                  <div className="grid grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="relative group/skill"
                          onMouseEnter={() => setHoveredSkill(`${category.title}-${skill.name}`)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ 
                              duration: 0.5, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 
                            }}
                            className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 text-center relative overflow-hidden cursor-pointer h-24 flex flex-col justify-center"
                            whileHover={{ 
                              scale: 1.1,
                              rotateY: 5,
                              rotateX: 5,
                              z: 15,
                              translateY: -5,
                              borderColor: 'rgba(139, 92, 246, 0.6)',
                              boxShadow: '0 10px 25px rgba(139, 92, 246, 0.4)'
                            }}
                            style={{
                              transformStyle: 'preserve-3d'
                            }}
                          >
                            {/* Skill Icon with Enhanced Animation */}
                            <motion.div
                              className="text-2xl mb-1 relative z-10 select-none flex justify-center items-center"
                              whileHover={{
                                scale: 1.2,
                                rotateY: [0, 15, -15, 0],
                                rotateZ: [0, 10, -10, 0],
                                y: [-1, -4, -1],
                              }}
                              transition={{
                                duration: 0.6,
                                ease: "easeInOut",
                                type: "spring",
                                stiffness: 200
                              }}
                            >
                              <SkillIcon size={28} />
                            </motion.div>
                            {/* Skill Name Label */}
                            <motion.h4 
                              className="text-xs font-semibold text-white relative z-10 leading-tight"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              {skill.name}
                            </motion.h4>
                            {/* Glow Effect */}
                            <motion.div
                              className={`absolute inset-0 rounded-lg bg-gradient-to-r ${category.gradient} opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300`}
                              style={{ filter: 'blur(8px)' }}
                            />
                            {/* Color-specific glow effect */}
                            <motion.div
                              className="absolute inset-0 rounded-lg"
                              animate={{
                                boxShadow: hoveredSkill === `${category.title}-${skill.name}` 
                                  ? `0 0 20px ${skill.color}66, inset 0 0 15px ${skill.color}1a`
                                  : '0 0 0px rgba(139, 92, 246, 0)'
                              }}
                              transition={{ duration: 0.3 }}
                            />
                            {/* Floating particles on hover */}
                            {hoveredSkill === `${category.title}-${skill.name}` && (
                              <div className="absolute inset-0 pointer-events-none">
                                {[...Array(4)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 rounded-full"
                                    style={{
                                      backgroundColor: skill.color,
                                      left: `${20 + Math.cos(i * 90 * Math.PI / 180) * 25}px`,
                                      top: `${20 + Math.sin(i * 90 * Math.PI / 180) * 25}px`
                                    }}
                                    animate={{
                                      y: [0, -10, 0],
                                      opacity: [0, 1, 0],
                                      scale: [0, 1.2, 0]
                                    }}
                                    transition={{
                                      duration: 1.2,
                                      repeat: Infinity,
                                      delay: i * 0.2,
                                      ease: "easeInOut"
                                    }}
                                  />
                                ))}
                              </div>
                            )}
                            {/* Enhanced Tooltip */}
                            <AnimatePresence>
                              {hoveredSkill === `${category.title}-${skill.name}` && (
                                <motion.div
                                  initial={{ 
                                    opacity: 0, 
                                    y: 10, 
                                    scale: 0.9
                                  }}
                                  animate={{ 
                                    opacity: 1, 
                                    y: 0, 
                                    scale: 1
                                  }}
                                  exit={{ 
                                    opacity: 0, 
                                    y: 10, 
                                    scale: 0.9
                                  }}
                                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/95 backdrop-blur-lg text-white text-xs px-3 py-2 rounded-lg border border-purple-500/40 whitespace-nowrap z-30 pointer-events-none"
                                  style={{
                                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(139, 92, 246, 0.3)'
                                  }}
                                  transition={{
                                    duration: 0.2,
                                    ease: "easeOut"
                                  }}
                                >
                                  <span className="font-semibold">{skill.name}</span>
                                  <div 
                                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/95 rotate-45 border-l border-t border-purple-500/40"
                                  ></div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>
                  {/* Category Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    style={{ filter: 'blur(20px)' }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
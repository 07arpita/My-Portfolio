import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const experiences = [
    {
      role: "General Secretary",
      company: "National Service Scheme (NSS)",
      duration: "2025 - Present",
      location: "NIT Silchar",
      description: "As a core member of NSS NIT Silchar, I actively contributed to the planning, coordination, and execution of multiple social impact initiatives. I worked closely with the administration, faculty, and student volunteers to manage large-scale events and foster community engagement.",
      achievements: [
        "Gained hands-on experience in leadership, stakeholder communication, and high-impact decision-making through interaction with faculty and partner institutions",
        "Initiated and coordinated over 5+ social impact events including cleanliness drives, awareness campaigns, and rural outreach programs",
        "Improved volunteer engagement by 40% through structured onboarding, motivation programs, and feedback-driven coordination"
      ],
      gradient: "from-blue-500 to-purple-600",
      technologies: []
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 relative overflow-hidden">
      {/* Enhanced background particles */}
      <div className="absolute inset-0">
        {React.useMemo(() => [...Array(6)], []).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Positions of Responsibility
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Leadership journey through technical societies and entrepreneurship initiatives at NIT Silchar
          </p>
        </motion.div>

        <div className="relative">
          {/* Enhanced timeline line with gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center mb-20 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Enhanced timeline dot */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-black shadow-xl z-10 flex items-center justify-center"
                whileHover={{ scale: 1.3, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Briefcase size={16} className="text-white" />
              </motion.div>

              {/* Enhanced content card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mt-16 md:mt-0`}>
                <motion.div
                  className="relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-lg border border-purple-500/30 rounded-xl p-8 shadow-2xl group relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: index % 2 === 0 ? -5 : 5,
                    boxShadow: '0 30px 60px rgba(139, 92, 246, 0.4)',
                    backgroundColor: 'rgba(139, 92, 246, 0.05)'
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Company logo placeholder */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <TrendingUp className="text-white" size={24} />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
                    {exp.role}
                  </h3>
                  <h4 className="text-xl font-semibold text-white mb-4">{exp.company}</h4>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>
                  
                  {/* Key achievements */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-white mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="text-sm text-gray-400 flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + achIndex * 0.1 + 0.5 }}
                        >
                          <span className="text-purple-400 mr-2 text-lg">•</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies used */}
                  {Array.isArray(exp.technologies) && exp.technologies.length > 0 && (
                    <>
                      <h5 className="text-sm font-semibold text-white mb-3">Skills & Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.1 + 0.8 }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.3)' }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Enhanced hover effects */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    style={{ filter: 'blur(20px)' }}
                  />

                  {/* Particle effects on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full"
                        style={{
                          left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 60}px`,
                          top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 60}px`
                        }}
                        animate={{
                          y: [0, -15, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* 3D depth shadow */}
                  <motion.div
                    className="absolute inset-0 bg-black/20 rounded-xl transform translate-z-[-15px]"
                    style={{
                      transform: 'translateZ(-15px) translateX(8px) translateY(8px)'
                    }}
                  />
                </motion.div>
              </div>

              {/* Enhanced floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-6 h-6 bg-purple-400 rounded-full opacity-60"
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: index * 0.5 
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
                animate={{ 
                  y: [0, 20, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.4, 1],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: index * 0.5 + 1 
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional cosmic background elements */}
        <div className="absolute top-1/3 left-1/5 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default Experience;
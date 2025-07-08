import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, Eye, Play, Code2 } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "AI-Powered Recruitment Platform",
      description: "An intelligent recruitment system featuring AI resume analysis, automated interviews, and comprehensive analytics dashboard.",
      fullDescription: "A comprehensive recruitment platform that leverages AI to streamline the hiring process. Features include AI-powered resume screening with skills extraction and candidate scoring, automated interview system with real-time analysis and behavioral assessment, comprehensive analytics dashboard with recruitment metrics and performance insights, and secure authentication with role-based access control. The platform integrates Hugging Face API for AI capabilities and provides end-to-end recruitment workflow automation.",
      technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Supabase", "Hugging Face API"],
      githubLink: "https://github.com/07arpita/HireEZ",
      liveLink: "https://ai-recruitment-demo.vercel.app",
      preview: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-500 to-purple-600",
      category: "Full Stack"
    },
    {
      title: "ML-Powered Stock Predictor",
      description: "Machine learning application that predicts stock prices using historical data and sentiment analysis from news articles.",
      fullDescription: "Advanced stock prediction system using LSTM neural networks and sentiment analysis. Combines historical price data with real-time news sentiment to generate predictions. Features include interactive charts powered by D3.js, risk assessment algorithms, portfolio optimization suggestions, and backtesting capabilities. The ML model achieves 78% accuracy in short-term predictions and includes confidence intervals for all forecasts.",
      technologies: ["Python", "TensorFlow", "Flask", "React", "Alpha Vantage API", "NLTK", "D3.js"],
      githubLink: "https://github.com/07arpita/stock-predictor",
      liveLink: "https://stock-ml-predictor.herokuapp.com",
      preview: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-yellow-500 to-red-500",
      category: "Machine Learning"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {React.useMemo(() => [...Array(8)], []).map((_, i) => (
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
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3
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
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of innovative solutions and cutting-edge technologies I've worked with
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className="group relative transform-gpu cursor-pointer w-full md:w-96"
              style={{ perspective: '1000px' }}
              onClick={() => setSelectedProject(index)}
            >
              <motion.div
                className="relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-lg border border-purple-500/30 rounded-xl overflow-hidden transition-all duration-500 group-hover:border-purple-500/50"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  z: 30
                }}
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={project.preview}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  
                  {/* Play button overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye className="text-white" size={24} />
                    </motion.div>
                  </motion.div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-lg text-white text-xs rounded-full border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Floating particles on hover */}
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
                          left: `${20 + i * 10}%`,
                          top: `${20 + (i % 3) * 20}%`
                        }}
                        animate={{
                          y: [0, -20, 0],
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
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.3)' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(index);
                      }}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye size={16} />
                      View Details
                    </motion.button>
                    
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        window.open(project.githubLink, '_blank', 'noopener,noreferrer');
                      }}
                      className="p-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors border border-purple-500/30 cursor-pointer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={16} />
                    </motion.a>
                    
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors border border-cyan-500/30"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>

                {/* 3D depth effect */}
                <motion.div
                  className="absolute inset-0 bg-black/10 rounded-xl transform translate-z-[-20px]"
                  style={{
                    transform: 'translateZ(-20px) translateX(8px) translateY(8px)'
                  }}
                />

                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  style={{ filter: 'blur(20px)' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/07arpita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 relative overflow-hidden group border border-gray-600/30"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(139, 92, 246, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            
            <Github size={24} className="relative z-10" />
            <span className="relative z-10 text-lg">GitHub</span>
          </motion.a>
        </motion.div>

        {/* Enhanced Project Detail Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
                className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 backdrop-blur-xl border border-purple-500/30 rounded-xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Close button */}
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Project image with animation */}
                  <div className="relative">
                    <motion.div
                      className="relative overflow-hidden rounded-lg"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <motion.img
                        src={projects[selectedProject].preview}
                        alt={projects[selectedProject].title}
                        className="w-full h-64 lg:h-80 object-cover rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${projects[selectedProject].gradient} opacity-20 rounded-lg`} />
                      
                      {/* Animated overlay elements */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <motion.div
                          className="w-20 h-20 border-2 border-white/30 rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Category and tech stack preview */}
                    <motion.div
                      className="mt-4 flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <span className={`px-3 py-1 bg-gradient-to-r ${projects[selectedProject].gradient} text-white text-sm rounded-full`}>
                        {projects[selectedProject].category}
                      </span>
                    </motion.div>
                  </div>
                  
                  {/* Project details */}
                  <div>
                    <motion.h3
                      className="text-3xl font-bold text-purple-400 mb-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {projects[selectedProject].title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-gray-300 mb-6 leading-relaxed"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {projects[selectedProject].fullDescription}
                    </motion.p>
                    
                    {/* Technologies */}
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Code2 size={20} />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 * techIndex }}
                            onClick={e => e.stopPropagation()}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Action buttons inside modal */}
                    <div className="flex gap-3 mt-4">
                      <motion.a
                        href={projects[selectedProject].githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => { e.stopPropagation(); }}
                        className="p-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors border border-purple-500/30 cursor-pointer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={16} />
                      </motion.a>
                      <motion.a
                        href={projects[selectedProject].liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => { e.stopPropagation(); }}
                        className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors border border-cyan-500/30"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Floating particles in modal */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.8, 0.2],
                        scale: [0.5, 1.2, 0.5]
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
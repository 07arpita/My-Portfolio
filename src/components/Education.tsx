import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const certificates = [
    {
      title: "Introduction to Natural Language Processing",
      issuer: "Infosys",
      date: "June 2025",
      description: "Infosysy Springboard Certification in Introduction to Natural Language Processing",
      icon: <Award size={24} />,
      color: "from-orange-500 to-red-500",
      badge: "Professional",
      pdfLink: "/infosys-nlp-certificate.pdf"
    },
    {
      title: "Introduction to Data Science",
      issuer: "Infosys",
      date: "June 2025",
      description: "Infosys Springngboard Certification in Introduction to Data Science",
      icon: <Trophy size={24} />,
      color: "from-blue-500 to-cyan-500",
      badge: "Professional",
      pdfLink: "/infosys-data-science-certificate.pdf"
    },
    {
      title: "Nanoscale and Semiconductor devices and integration with Machine Learning",
      issuer: "Department of Electronics and Communications Engineering NIT Silchar and Gauhati University",
      date: "May2025",
      description: "Certification in Nanoscale and Semiconductor devices and integration with Machine Learning",
      icon: <BookOpen size={24} />,
      color: "from-blue-600 to-purple-600",
      badge: "Fundamentals",
      pdfLink: "/nanoscale-semiconductor-certificate.pdf"
    }
  ];

  const education = [
    {
      degree: "Class 10th (ICSE)",
      institution: "Carmel School Gorakhpur Uttar Pradesh",
      duration: "2020",
      location: "Gorakhpur, Uttar Pradesh",
      gpa: "96.96%",
      description: "Completed Class 10th from ICSE Board with distinction.",
      achievements: [
        "Secured 96.96% in board exams"
      ],
      icon: <Award size={24} />,
      color: "from-yellow-400 to-orange-400"
    },
    {
      degree: "Class 12th",
      institution: "Savitri Public School Gorakhpur Uttar Pradesh",
      duration: "2023",
      location: "Gorakhpur, Uttar Pradesh",
      gpa: "90%",
      description: "Completed Class 12th with a focus on Science stream.",
      achievements: [
        "Secured 90% in board exams"
      ],
      icon: <BookOpen size={24} />,
      color: "from-blue-400 to-cyan-400"
    },
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "National Institute of Technology, Silchar",
      duration: "2023 - Present",
      location: "Silchar, Assam",
      description: "Pursuing B.Tech with a focus on Electronics, Communication, and emerging technologies.",
      icon: <GraduationCap size={24} />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, certificates.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const getVisibleCertificates = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % certificates.length;
      visible.push({ ...certificates[index], displayIndex: i });
    }
    return visible;
  };

  return (
    <section id="education" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background particles */}
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
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Education & Certifications
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Academic journey and professional certifications that shaped my expertise in technology and innovation
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full" />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Timeline dot */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-black shadow-lg z-10"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mt-16 md:mt-0`}> 
                <motion.div
                  className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-lg border border-purple-500/30 rounded-xl p-8 shadow-2xl group"
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: index % 2 === 0 ? -5 : 5,
                    boxShadow: '0 25px 50px rgba(139, 92, 246, 0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Header with icon */}
                  <div className="flex items-center mb-4">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${edu.color} mr-4`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -10, 10, 0]
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white">
                        {edu.icon}
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-semibold text-white">{edu.institution}</h4>
                    </div>
                  </div>
                  
                  {/* Duration and location */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      {edu.location}
                    </div>
                  </div>
                  
                  {/* GPA/Grade */}
                  <div className="mb-4">
                    <div className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-sm text-purple-300 inline-block">
                      {edu.gpa}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-4">{edu.description}</p>
                  
                  {/* Achievements */}
                  {Array.isArray(edu.achievements) && edu.achievements.length > 0 && (
                    <div>
                      <h5 className="text-sm font-semibold text-white mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="text-sm text-gray-400 flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 + achIndex * 0.1 + 0.5 }}
                          >
                            <span className="text-purple-400 mr-2">•</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Professional Certifications
          </h3>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            {/* Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-purple-500/20 text-purple-400 rounded-full hover:bg-purple-500/30 transition-colors border border-purple-500/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-purple-500/20 text-purple-400 rounded-full hover:bg-purple-500/30 transition-colors border border-purple-500/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>

            {/* Certificate Cards */}
            <div className="flex justify-center items-center gap-6 px-16 py-8">
              <AnimatePresence mode="wait">
                {getVisibleCertificates().map((cert, index) => (
                  <motion.div
                    key={`${cert.title}-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    animate={{ 
                      opacity: index === 1 ? 1 : 0.7, 
                      scale: index === 1 ? 1 : 0.9,
                      x: 0,
                      zIndex: index === 1 ? 10 : 5
                    }}
                    exit={{ opacity: 0, scale: 0.8, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative"
                  >
                    <motion.div
                      className="w-80 h-80 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-lg border border-purple-500/30 rounded-xl p-6 shadow-2xl overflow-hidden"
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 5,
                        boxShadow: '0 25px 50px rgba(139, 92, 246, 0.4)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Certificate Header */}
                      <div className="flex items-center mb-4">
                        <motion.div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center mr-4 flex-shrink-0`}
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="text-white">
                            {cert.icon}
                          </div>
                        </motion.div>
                        <div className="min-w-0 flex-1">
                          <div className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-xs text-purple-300 inline-block mb-1">
                            {cert.badge}
                          </div>
                          <h4 className="text-lg font-bold text-white truncate">{cert.title}</h4>
                        </div>
                      </div>

                      {/* Certificate Details */}
                      <div className="mb-4">
                        <p className="text-purple-400 font-semibold truncate">{cert.issuer}</p>
                        <p className="text-gray-400 text-sm">{cert.date}</p>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">{cert.description}</p>

                      {/* View Certificate Button */}
                      <motion.a
                        href={cert.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View
                      </motion.a>

                      {/* Hover Glow Effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        style={{ filter: 'blur(20px)' }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {certificates.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-purple-400 scale-125' 
                      : 'bg-purple-400/30 hover:bg-purple-400/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
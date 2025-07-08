import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Handler to show thank you message after form submission
  const handleFormSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 500); // slight delay to allow Google Forms to process
  };

  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Let's connect and discuss opportunities in electronics, machine learning, or collaboration projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-lg border border-purple-500/30 rounded-lg"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)',
                  borderColor: 'rgba(139, 92, 246, 0.5)'
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="text-white" size={20} />
                </motion.div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">arpitamaurya2707@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-lg border border-purple-500/30 rounded-lg"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)',
                  borderColor: 'rgba(6, 182, 212, 0.5)'
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg"
                  whileHover={{ 
                    rotate: [0, 15, -15, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <MapPin className="text-white" size={20} />
                </motion.div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">NIT Silchar, Assam</p>
                </div>
              </motion.div>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-4 mt-8">
              <motion.a
                href="https://www.linkedin.com/in/arpita-maurya-57a4532a4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -5, 5, 0]
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <Linkedin className="text-white relative z-10" size={20} />
                {/* Floating particles */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                >
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + i * 15}%`
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </motion.div>
              </motion.a>
              
              <motion.a
                href="https://github.com/07arpita"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, 5, -5, 0]
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-800 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <Github className="text-white relative z-10" size={20} />
                {/* Floating particles */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                >
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + i * 15}%`
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </motion.div>
              </motion.a>
            </div>

            {/* Enhanced 3D Animated Student */}
            <motion.div
              className="relative mt-12 flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.div
                className="w-40 h-40 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-full backdrop-blur-lg border border-purple-500/50 flex items-center justify-center relative overflow-hidden"
                animate={{ 
                  rotateY: [0, 360],
                  rotateX: [0, 10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)'
                }}
              >
                {/* Student */}
                <motion.div
                  className="text-6xl relative z-10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  👨‍🎓
                </motion.div>

                {/* Enhanced floating stars around student */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full"
                    style={{
                      left: `${30 + Math.cos(i * 30 * Math.PI / 180) * 50}px`,
                      top: `${30 + Math.sin(i * 30 * Math.PI / 180) * 50}px`
                    }}
                    animate={{
                      scale: [0, 2, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.25,
                      ease: "easeInOut"
                    }}
                  />
                ))}

                {/* Multiple orbital rings */}
                <motion.div
                  className="absolute inset-2 border border-purple-400/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-6 border border-cyan-400/30 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-10 border border-pink-400/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Enhanced "Let's Connect" text */}
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.h4 
                  className="text-xl font-bold text-purple-400 mb-2"
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
                  Let's Connect
                </motion.h4>
                <p className="text-gray-400 text-sm">Ready to innovate and collaborate</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form - now with thank you message and iframe */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-lg border border-purple-500/30 rounded-xl p-8 relative overflow-hidden"
          >
            {/* Animated background particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1.5, 0.5]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Send a Message</h3>
            {/* Hidden iframe for form submission */}
            <iframe
              name="hidden_iframe"
              id="hidden_iframe"
              style={{ display: 'none' }}
              onLoad={() => {
                // Only show thank you if form was just submitted
                if (formRef.current && formRef.current.dataset.submitting === 'true') {
                  handleFormSubmit();
                  formRef.current.dataset.submitting = 'false';
                }
              }}
            />
            {submitted ? (
              <div className="bg-green-600/80 text-white px-4 py-2 rounded mb-4 text-center animate-fade-in relative z-10">
                Thank you for contacting me! Your message has been sent.
              </div>
            ) : (
              <form
                ref={formRef}
                action="https://docs.google.com/forms/d/e/1FAIpQLSe5TVlEmxjYVLv3nwvUWGweTmFQCfN3Ih-ZVXb-UaPhxV5cSw/formResponse"
                method="POST"
                target="hidden_iframe"
                className="space-y-6 relative z-10"
                onSubmit={() => {
                  if (formRef.current) formRef.current.dataset.submitting = 'true';
                }}
              >
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="entry.886929593"
                    className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="entry.305904525"
                    className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="entry.145947881"
                    rows={5}
                    className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 relative overflow-hidden group"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
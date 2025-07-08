import React, { useState, useEffect } from 'react';
import { Github, Home, User, Briefcase, FolderOpen, Wrench, Code, Mail, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'leetcode', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'leetcode', label: 'LeetCode', icon: Code },
    { id: 'contact', label: 'Contact Me', icon: Mail }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl' 
          : 'bg-black/40 backdrop-blur-md border-b border-purple-500/10'
      }`}
      style={{
        background: isScrolled 
          ? 'rgba(0, 0, 0, 0.8)' 
          : 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(20px)',
        boxShadow: isScrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(139, 92, 246, 0.1)' 
          : '0 4px 16px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Enhanced Logo */}
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center relative overflow-hidden"
            whileHover={{ 
              rotate: [0, -10, 10, 0],
              boxShadow: '0 0 25px rgba(139, 92, 246, 0.6)'
            }}
            transition={{ duration: 0.4 }}
          >
            <motion.span 
              className="text-white font-bold text-lg relative z-10"
              animate={{
                textShadow: [
                  '0 0 5px rgba(255, 255, 255, 0.5)',
                  '0 0 10px rgba(255, 255, 255, 0.8)',
                  '0 0 5px rgba(255, 255, 255, 0.5)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              A
            </motion.span>
            
            {/* Floating particles in logo */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
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
                    y: [0, -8, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
          <motion.span 
            className="text-white font-bold text-xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Portfolio
          </motion.span>
        </motion.div>

        {/* Enhanced Navigation Items */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group overflow-hidden
                  ${isActive 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                  }
                `}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Enhanced Active background */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg border border-purple-500/30"
                    layoutId="activeBackground"
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Enhanced Hover glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating particles on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${30 + i * 10}%`
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1.2, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center space-x-2">
                  <motion.div
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={16} />
                  </motion.div>
                  <span>{item.label}</span>
                </div>
                
                {/* Enhanced Underline effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Enhanced GitHub Button */}
        <motion.a
          href="https://github.com/07arpita"
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-3 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 text-gray-300 hover:text-white transition-all duration-300 group overflow-hidden"
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)'
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Enhanced Glow animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          
          {/* Enhanced Floating particles */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${15 + i * 12}%`
                }}
                animate={{
                  y: [0, -12, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15
                }}
              />
            ))}
          </motion.div>
          
          <motion.div
            className="relative z-10"
            whileHover={{ 
              rotate: [0, -15, 15, 0],
              scale: 1.2
            }}
            transition={{ duration: 0.6 }}
          >
            <Github size={20} />
          </motion.div>
        </motion.a>

        {/* Enhanced Mobile menu button */}
        <motion.button
          className="md:hidden p-2 text-gray-300 hover:text-white relative overflow-hidden group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Open mobile menu"
        >
          <motion.div
            className="absolute inset-0 bg-purple-500/20 rounded opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <div className="w-6 h-6 flex flex-col justify-center space-y-1 relative z-10">
            <motion.div 
              className="w-full h-0.5 bg-current"
              whileHover={{ scaleX: 1.2 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="w-full h-0.5 bg-current"
              whileHover={{ scaleX: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="w-full h-0.5 bg-current"
              whileHover={{ scaleX: 1.2 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <nav
            className="flex flex-col space-y-6 text-2xl font-semibold text-white"
            onClick={e => e.stopPropagation()}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-6 py-3 rounded-lg transition-colors duration-200 w-full text-left ${activeSection === item.id ? 'bg-gradient-to-r from-purple-500/30 to-cyan-500/30' : 'hover:bg-purple-500/10'}`}
              >
                <span className="inline-flex items-center gap-2">
                  <item.icon size={22} />
                  {item.label}
                </span>
              </button>
            ))}
            <a
              href="https://github.com/07arpita"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-gray-800/70 to-gray-700/70 text-gray-200 hover:text-white text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Github size={22} className="inline mr-2" /> GitHub
            </a>
          </nav>
          <button
            className="absolute top-6 right-6 text-3xl text-white"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            &times;
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiTwitter, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Skills', path: '/skills' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Backdrop with theme-based blur and opacity */}
      <div className={`absolute inset-0 backdrop-blur-md border-b transition-colors duration-300
        ${isDark 
          ? 'bg-gray-900/80 border-gray-700' 
          : 'bg-white/80 border-gray-200'
        }`} 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className={`relative flex items-center space-x-2 transition-colors duration-300
              ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SabinamM
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group px-4 py-2 mx-1"
                >
                  <span 
                    className={`relative z-10 text-sm font-medium transition-colors
                      group-hover:text-blue-600 
                      ${isDark 
                        ? 'group-hover:text-blue-400 text-gray-300 hover:text-blue-400' 
                        : 'text-gray-700 hover:text-blue-600'
                      }
                      ${location.pathname === link.path
                        ? isDark ? 'text-blue-400' : 'text-blue-600'
                        : ''
                      }`}
                  >
                    {link.title}
                  </span>
                  
                  {/* Active & Hover Indicator */}
                  <AnimatePresence>
                    {location.pathname === link.path && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute inset-0 rounded-lg transition-colors duration-300
                          ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 
                    transition-all duration-300 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`} 
                  />
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className={`w-px h-6 transition-colors duration-300
              ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`} 
            />

            {/* Social Links */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 transition-colors duration-300
                    ${isDark 
                      ? 'text-gray-300 hover:text-blue-400' 
                      : 'text-gray-700 hover:text-blue-600'
                    }`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 ml-2 rounded-lg transition-all duration-300
                ${isDark 
                  ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                }`}
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="dark"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiSun className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="light"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMoon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-300
                ${isDark 
                  ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                }`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiX className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiMenuAlt3 className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`relative md:hidden border-b transition-colors duration-300
              ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
          >
            <div className={`backdrop-blur-md transition-colors duration-300
              ${isDark ? 'bg-gray-900/80' : 'bg-white/80'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="grid gap-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="relative group"
                    >
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        className={`relative px-4 py-3 rounded-lg text-base font-medium transition-all duration-300
                          ${location.pathname === link.path
                            ? isDark 
                              ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20 text-blue-400'
                              : 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600'
                            : isDark
                              ? 'text-gray-300 hover:bg-gray-800'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                      >
                        {link.title}
                        {location.pathname === link.path && (
                          <motion.div
                            layoutId="mobile-active-indicator"
                            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-r-full"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  ))}

                  {/* Mobile Social Links */}
                  <div className={`flex items-center justify-between px-4 pt-4 border-t
                    transition-colors duration-300
                    ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-2 transition-colors duration-300
                            ${isDark 
                              ? 'text-gray-300 hover:text-blue-400' 
                              : 'text-gray-700 hover:text-blue-600'
                            }`}
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>

                    {/* Mobile Dark Mode Toggle */}
                    <button
                      onClick={toggleTheme}
                      className={`p-2 rounded-lg transition-colors duration-300
                        ${isDark 
                          ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                        }`}
                      aria-label="Toggle dark mode"
                    >
                      {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 
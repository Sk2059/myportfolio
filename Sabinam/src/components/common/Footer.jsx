import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-500' }
  ];

  const footerLinks = [
    { 
      title: 'Navigation', 
      links: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' }
      ] 
    },
    { 
      title: 'Resources', 
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Newsletter', path: '/newsletter' },
        { name: 'Resume', path: '/resume' },
        { name: 'Portfolio', path: '/portfolio' }
      ] 
    },
    { 
      title: 'Legal', 
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookies' }
      ] 
    }
  ];

  const contactInfo = [
    { icon: FaEnvelope, text: '                                                                                                                                                                                                                                                                                                                                                                                hello@portfolio.com', link: 'mailto:hello@portfolio.com' },
    { icon: FaPhone, text: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: FaMapMarkerAlt, text: 'San Francisco, CA', link: '#' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

             {/* Main Footer Content */}
       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                 <motion.div 
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10"
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
         >
          {/* Brand Section */}
          <motion.div className="lg:col-span-2 xl:col-span-1 space-y-6" variants={itemVariants}>
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Portfolio
                </h3>
              </motion.div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Crafting digital experiences with passion and precision. Let's build something amazing together.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Contact Info
              </h4>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.link}
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-all duration-300 group p-2 rounded-lg hover:bg-gray-800/30"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      <contact.icon />
                    </div>
                    <span className="text-sm font-medium">{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      y: -5, 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`relative p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 
                      text-gray-400 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 group
                      ${social.color}`}
                  >
                    <social.icon size={20} />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                      {social.label}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div key={section.title} className="space-y-6" variants={itemVariants}>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 relative">
                  {section.title}
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (sectionIndex + linkIndex) * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className="group flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm"
                      >
                        <span className="relative">
                          {link.name}
                          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></div>
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>



        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
        >
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
            <p className="flex items-center">
              © {new Date().getFullYear()} Your Portfolio. All rights reserved.
            </p>
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
            <p className="flex items-center">
              Made with <span className="text-red-400 mx-1">❤️</span> and React
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm font-medium"
            >
              Privacy Policy
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm font-medium"
            >
              Terms of Service
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center group"
        >
          <svg 
            className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>
    </footer>
  );
};

export default Footer; 
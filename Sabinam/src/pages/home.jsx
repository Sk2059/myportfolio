
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiArrowRight, FiGithub as FiGithubIcon, FiLinkedin as FiLinkedinIcon, FiTwitter, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { HiOutlineCode, HiOutlineLightBulb, HiOutlineSparkles } from 'react-icons/hi';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const socialLinks = [
    { icon: FiGithubIcon, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email' }
  ];

  const highlights = [
    {
      icon: HiOutlineCode,
      title: 'Full Stack Developer',
      description: 'Specialized in modern web technologies'
    },
    {
      icon: HiOutlineLightBulb,
      title: 'Problem Solver',
      description: 'Turning complex challenges into elegant solutions'
    },
    {
      icon: HiOutlineSparkles,
      title: 'UI/UX Enthusiast',
      description: 'Creating beautiful, intuitive interfaces'
    }
  ];

  const floatingAnimation = {
    y: ['-4px', '4px'],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }
  };

  // Add new section variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  const [fprojects, setProjects] = useState([]);
  const [ftech, settech] = useState([]);

   useEffect(() => {
    fetch("https://myprortfolio.onrender.com/api/featured/")   
      .then((res) => res.json())
      .then((data) => {
        console.log("Projects from backend:", data); 
        setProjects(data);
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  useEffect(()=>{
    fetch("https://myprortfolio.onrender.com/apis/tech/")
    .then((res)=>res.json())
    .then((data)=>{
      settech(data);
    })
    .catch((error)=> console.log("error while fetching tech:",error));
  },[]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 pt-20 sm:pt-24">
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center min-h-full">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="text-center lg:text-left order-2 lg:order-1">
              <motion.div
                variants={itemVariants}
                className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-50 dark:bg-blue-900/30
                rounded-full text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium"
              >
                Welcome to my portfolio
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 leading-tight"
              >
                <span className="block text-gray-900 dark:text-white leading-tight">
                  Transforming Ideas
                </span>
                <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                  Into Digital Reality
                </span>
          </motion.h1>

          <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-4 sm:mb-6 px-2 sm:px-0"
              >
                I'm <span className="font-semibold text-gray-900 dark:text-white">Sk</span>,
                a passionate full-stack developer dedicated to crafting exceptional digital experiences
                through clean code and intuitive design.
          </motion.p>

          <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mb-4 sm:mb-6 px-2 sm:px-0"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white
                  bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700
                  hover:to-purple-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  View My Work
                  <FiArrowRight className="text-sm sm:text-base" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-gray-700
                  dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                  rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transform hover:scale-105
                  transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  Get in Touch
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-6 justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
              target="_blank"
              rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 
                    dark:hover:text-blue-400 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Compact Professional Portfolio */}
            <motion.div variants={itemVariants} className="relative z-10 order-1 lg:order-2">
              {/* Circular Portfolio Image */}
              <motion.div
                variants={itemVariants}
                className="relative mb-3 sm:mb-4 flex justify-center z-20"
              >
                <div className="relative z-30">
                  <div className="relative z-40">
                    {/* Circular Image Container - Responsive sizing */}
                    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 shadow-2xl border-2 sm:border-4 border-white dark:border-gray-700">
                                      <img
                    src="/images/sk2.jpg"
                    alt="Professional Portfolio"
                    className="w-full h-full object-cover"
                  />
                    </div>

                    {/* Professional Badge - Responsive sizing */}
                    <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 z-50">
                      <div className="bg-white dark:bg-gray-800 rounded-full p-2 sm:p-3 shadow-xl border border-gray-200 dark:border-gray-600 sm:border-2">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 hidden sm:inline">Available</span>
                          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 sm:hidden">•</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Circular Background Ring - Responsive sizing */}
                  <div className="absolute inset-0 -z-10">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl"></div>
                  </div>

                  {/* Decorative Dots - Hidden on mobile for cleaner look */}
                  <div className="absolute -inset-4 z-10 hidden sm:block">
                    <div className="absolute top-4 right-4 w-2 sm:w-3 h-2 sm:h-3 bg-blue-500/30 rounded-full"></div>
                    <div className="absolute bottom-8 left-2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-500/30 rounded-full"></div>
                    <div className="absolute top-12 left-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-pink-500/30 rounded-full"></div>
                    <div className="absolute bottom-4 right-8 w-2 sm:w-3 h-2 sm:h-3 bg-indigo-500/30 rounded-full"></div>
                  </div>
                </div>
              </motion.div>

              {/* Compact Professional Highlights - Mobile optimized */}
              <div className="relative z-10 space-y-1.5 sm:space-y-2 px-2 sm:px-0">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 2, scale: 1.005 }}
                    className="group p-2.5 sm:p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl
                    shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="p-1.5 sm:p-2 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-md sm:rounded-lg flex-shrink-0">
                        <highlight.icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed line-clamp-2 sm:line-clamp-none">
                          {highlight.description}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                        <FiArrowRight className="w-3 h-3 text-blue-500" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Subtle Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full filter blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full filter blur-2xl"></div>
            </motion.div>
          </motion.div>

          {/* Compact Stats Section - Mobile optimized */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-4 sm:mt-6 lg:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 px-2 sm:px-0"
          >
            {[
              { label: 'Years Experience', value: '1+' },
              { label: 'Projects Delivered', value: '10+' },
              { label: 'Satisfied Clients', value: '10+' },
              { label: 'Technologies', value: '15+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-3 sm:p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl
                border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600
                  bg-clip-text text-transparent"
                >
                  {stat.value}
                </motion.div>
                <div className="mt-0.5 sm:mt-1 text-xs font-medium text-gray-600 dark:text-gray-400 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Featured Projects Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10" />
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02]" />

        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            {/* Enhanced Header */}
            <div className="text-center mb-12 sm:mb-16">
              <motion.div
                variants={cardVariants}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-blue-600 dark:text-blue-400
                bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800 shadow-sm"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                Portfolio Showcase
              </motion.div>

              <motion.h2
                variants={cardVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
              >
                Featured <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
              </motion.h2>

              <motion.p
                variants={cardVariants}
                className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed px-4 sm:px-0"
              >
                Explore my carefully crafted digital solutions that blend innovative technology with exceptional user experience.
                Each project represents a unique challenge solved with creativity and technical expertise.
              </motion.p>
            </div>

            {/* Enhanced Project Grid */}
            <motion.div
              variants={sectionVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {fprojects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden
                  border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl
                  transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600"
                >
                  {/* Project Image/Preview Area */}
                  <div className={`relative h-48 overflow-hidden bg-cover bg-center`} style={{ backgroundImage: `url(${project.image})` }}>

                    <div className="absolute inset-0 bg-black/10"></div>
                    {/* <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${
                        project.status === 'Live' ? 'bg-green-500/20 text-green-100 border border-green-400/30' :
                        project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-100 border border-yellow-400/30' :
                        'bg-blue-500/20 text-blue-100 border border-blue-400/30'
                      }`}>
                        {project.status}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium text-white/80 bg-black/20 rounded-full backdrop-blur-sm">
                        {project.year}
                      </span>
                    </div> */}

                    {/* Large Icon */}
                    {/* <div className="absolute bottom-4 right-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl border border-white/30">
                        {project.icon}
                      </div>
                    </div> */}

                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Features - Compact */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.highlights.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30
                            text-blue-600 dark:text-blue-400 rounded-md"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack - Compact */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700
                            text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <Link
                        to={project.live_link}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold
                        text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg
                        hover:from-blue-700 hover:to-purple-700 transition-all duration-300
                        shadow-md hover:shadow-lg transform hover:scale-105"
                      >
                        View Details
                        <FiArrowRight className="w-4 h-4" />
                      </Link>

                      <div className="flex items-center gap-1">
                        <a 
                          href={project.github_link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 
                                    dark:hover:bg-blue-900/30 rounded-lg transition-all duration-300"
                        >
                          <FiGithubIcon className="w-4 h-4" />
                        </a>
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                    </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
            ))}
            </motion.div>

            {/* Enhanced Call to Action */}
            <motion.div
              variants={cardVariants}
              className="text-center mt-12 sm:mt-16"
            >
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-3xl border border-blue-200/50 dark:border-blue-800/50 shadow-lg">
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Interested in working together?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Let's discuss your next project and bring your ideas to life.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-blue-600 dark:text-blue-400
                    bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800 rounded-full
                    hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    View All Projects
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white
                    bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700
                    hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    Get In Touch
                    <FiMail className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-pink-50/50 dark:from-purple-900/10 dark:via-blue-900/10 dark:to-pink-900/10" />
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02]" />

        {/* Floating Background Elements */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            {/* Enhanced Header */}
            <div className="text-center mb-12 sm:mb-16">
              <motion.div
                variants={cardVariants}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-purple-600
                dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-800 shadow-sm"
              >
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                My Services
              </motion.div>

              <motion.h2
                variants={cardVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
              >
                What I <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">Offer</span>
              </motion.h2>

              <motion.p
                variants={cardVariants}
                className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed px-4 sm:px-0"
              >
                From initial concept to final deployment, I provide comprehensive digital solutions
                that combine cutting-edge technology with exceptional user experience.
              </motion.p>
            </div>

            {/* Enhanced Services Grid */}
            <motion.div
              variants={sectionVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              {ftech.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group relative h-full"
                >
                  <div className="relative h-full bg-white dark:bg-gray-800 rounded-xl
                  border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg
                  transition-all duration-300 overflow-hidden flex flex-col hover:border-blue-300 dark:hover:border-blue-600">

                    {/* Header Section */}
                    <div className="relative p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-b border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        {/* Icon and Title */}
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600
                          flex items-center justify-center text-xl shadow-sm">
                            {service.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white
                            group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {service.title}
                            </h3>
                            <div className="w-8 h-0.5 bg-blue-600 mt-1 rounded-full"></div>
                          </div>
                        </div>

                        {/* Service Number */}
                        <div className="w-8 h-8 rounded-full bg-blue-600/10
                        flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-600">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-6 flex flex-col">
                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm flex-1">
                        {service.description}
                      </p>

                      {/* Features Grid */}
                      <div className="mb-6">
                        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                          Key Skills
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.my_skills.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                              <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Section */}
                    <div className="p-6 pt-0">
                      <div className="flex items-center justify-between">
                        {/* Status Indicator */}
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Available</span>
                        </div>

                        {/* CTA Button */}
                        <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold
                        text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg
                        hover:shadow-md transform hover:scale-105 transition-all duration-300">
                          Learn More
                          <FiArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Left Border Accent */}
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Call to Action */}
            <motion.div
              variants={cardVariants}
              className="mt-12 sm:mt-16"
            >
              <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20
              rounded-3xl p-8 sm:p-12 border border-blue-200/50 dark:border-blue-800/50 shadow-xl text-center">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Ready to bring your <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">vision to life?</span>
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Let's collaborate to create something amazing together. From initial consultation to final deployment,
                    I'll guide you through every step of the development process.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white
                      bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700
                      hover:to-purple-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
                    >
                      Start a Project
                      <FiArrowRight className="w-5 h-5" />
                    </Link>

                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-blue-600 dark:text-blue-400
                      bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800 rounded-full
                      hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
                    >
                      View All Services
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* Trust Indicators */}
                  <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Available for new projects</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Quick response time</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>100% satisfaction guarantee</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;














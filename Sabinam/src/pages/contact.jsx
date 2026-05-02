import { motion } from 'framer-motion';
import axios from 'axios';
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { HiOutlineLightBulb, HiOutlineChatAlt2, HiOutlineSparkles } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaYoutube, FaMediumM, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

 const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post('http://localhost:8000/apic/contact/', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'sksingh4919@gmail.com',
      link: 'mailto:sksingh4919.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '9815854887',
      link: 'tel:+977 9815854887'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Biratnagar,Nepal',
      link: 'https://maps.app.goo.gl/iJXLr6eZ6eBkmWMX9'
    }
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: FiTwitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: FaFacebookF,
      label: 'Facebook',
      href: 'https://facebook.com',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      href: 'https://instagram.com',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: FaYoutube,
      label: 'YouTube',
      href: 'https://youtube.com',
      color: 'from-red-500 to-red-700'
    },
    {
      icon: FaMediumM,
      label: 'Medium',
      href: 'https://medium.com',
      color: 'from-gray-800 to-black'
    },
    {
      icon: FaDiscord,
      label: 'Discord',
      href: 'https://discord.com',
      color: 'from-indigo-500 to-indigo-700'
    }
  ];

  const services = [
    {
      icon: HiOutlineLightBulb,
      title: 'Web Development',
      description: 'Full-stack web development with modern technologies.'
    },
    {
      icon: HiOutlineChatAlt2,
      title: 'Consultation',
      description: 'Technical consultation and architecture planning.'
    },
    {
      icon: HiOutlineSparkles,
      title: 'UI/UX Design',
      description: 'Modern and responsive user interface design.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-blue-50 
    dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-600 
              dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full"
            >
              Get in Touch
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 
              to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent"
            >
              Let's Work Together
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300"
            >
              Have a project in mind? I'd love to help bring your ideas to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="relative group"
            >
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 
              rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 
              rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl 
              p-8 border border-white/20 dark:border-gray-700/50 shadow-2xl group-hover:shadow-2xl 
              transition-all duration-500">
                {/* Form Header */}
                <motion.div variants={itemVariants} className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 
                  to-purple-500 flex items-center justify-center text-white shadow-lg">
                    <FiMail className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Send a Message
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I'll get back to you as soon as possible
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div variants={itemVariants} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                    rounded-xl opacity-0 group-focus-within:opacity-100 transition-all duration-300" />
                    <div className="relative">
                      <label 
                        htmlFor="name" 
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 rounded-xl bg-gray-50/50 dark:bg-gray-700/50 border-2 
                        border-gray-200/50 dark:border-gray-600/50 focus:border-blue-500 dark:focus:border-blue-400 
                        focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-400/10 outline-none 
                        transition-all duration-300 dark:text-white"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div variants={itemVariants} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                    rounded-xl opacity-0 group-focus-within:opacity-100 transition-all duration-300" />
                    <div className="relative">
                      <label 
                        htmlFor="email" 
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 rounded-xl bg-gray-50/50 dark:bg-gray-700/50 border-2 
                        border-gray-200/50 dark:border-gray-600/50 focus:border-blue-500 dark:focus:border-blue-400 
                        focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-400/10 outline-none 
                        transition-all duration-300 dark:text-white"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </motion.div>

                  {/* Subject Field */}
                  <motion.div variants={itemVariants} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                    rounded-xl opacity-0 group-focus-within:opacity-100 transition-all duration-300" />
                    <div className="relative">
                      <label 
                        htmlFor="subject" 
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 rounded-xl bg-gray-50/50 dark:bg-gray-700/50 border-2 
                        border-gray-200/50 dark:border-gray-600/50 focus:border-blue-500 dark:focus:border-blue-400 
                        focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-400/10 outline-none 
                        transition-all duration-300 dark:text-white"
                        placeholder="Enter the subject of your message"
                      />
                    </div>
                  </motion.div>

                  {/* Message Field */}
                  <motion.div variants={itemVariants} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                    rounded-xl opacity-0 group-focus-within:opacity-100 transition-all duration-300" />
                    <div className="relative">
                      <label 
                        htmlFor="message" 
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-6 py-4 rounded-xl bg-gray-50/50 dark:bg-gray-700/50 border-2 
                        border-gray-200/50 dark:border-gray-600/50 focus:border-blue-500 dark:focus:border-blue-400 
                        focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-400/10 outline-none 
                        transition-all duration-300 dark:text-white resize-none"
                        placeholder="Enter your message here..."
                      />
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div variants={itemVariants}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full px-8 py-4 text-white bg-gradient-to-r from-blue-600 
                      via-purple-600 to-pink-600 rounded-xl hover:from-blue-700 hover:via-purple-700 
                      hover:to-pink-700 focus:ring-4 focus:ring-blue-500/20 outline-none 
                      transition-all duration-300 flex items-center justify-center gap-3 
                      disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden"
                    >
                      {/* Button background animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative flex items-center gap-3">
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <FiSend className="w-5 h-5" />
                        )}
                        <span className="font-semibold">
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </span>
                      </div>
                    </button>
                  </motion.div>

                  {/* Status Message */}
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className={`text-center p-4 rounded-xl border-2 ${
                        submitStatus === 'success'
                          ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800'
                          : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {submitStatus === 'success' ? (
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                        <span className="font-medium">
                          {submitStatus === 'success'
                            ? 'Message sent successfully!'
                            : 'Something went wrong. Please try again.'}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-8"
            >
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="relative group block"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                  rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl 
                  p-6 border border-gray-100 dark:border-gray-700 shadow-lg group-hover:shadow-xl 
                  transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 
                      to-purple-500 flex items-center justify-center text-white">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Social Links in Contact Info Section */}
              <motion.div 
                variants={itemVariants} 
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border 
                border-gray-100 dark:border-gray-700 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {socialLinks.slice(0, 8).map((social, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center"
                    >
                      <motion.a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -4 }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${social.color} 
                        flex items-center justify-center text-white hover:shadow-lg 
                        transition-all relative`}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                      <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        {social.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Services I Offer
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
            >
              Here are some ways I can help you with your next project.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl 
                p-6 border border-gray-100 dark:border-gray-700 shadow-lg group-hover:shadow-xl 
                transition-all h-full">
                  <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-blue-500 
                  to-purple-500 flex items-center justify-center text-white">
                    <service.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 
      dark:from-gray-800 dark:to-gray-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-gray-900 dark:text-white"
            >
              Stay Connected
            </motion.h2>
            
            {/* Social Links Container */}
            <motion.div
              variants={containerVariants}
              className="max-w-3xl mx-auto"
            >
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-y-8 gap-x-6">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex flex-col items-center group"
                  >
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4 }}
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${social.color} 
                      flex items-center justify-center text-white shadow-sm 
                      hover:shadow-lg transition-all duration-300`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                    <span className="mt-2 text-xs font-medium text-gray-600 dark:text-gray-400 
                    opacity-70 group-hover:opacity-100 transition-opacity">
                      {social.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="max-w-xs mx-auto mt-12 mb-8 border-t border-gray-200 dark:border-gray-700"
            />

            {/* Footer Text */}
            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 font-medium"
            >
              Let's create something amazing together!
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiLayers, FiStar } from 'react-icons/fi';
import { HiOutlineFire, HiOutlineLightBulb, HiOutlineSparkles } from 'react-icons/hi';
import { useEffect, useState } from "react";

const Projects = () => {
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
   
  const [fprojects, setProjects] = useState([]);
  const [oprojects, setoProjects] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/featured/")   
      .then((res) => res.json())
      .then((data) => {
        console.log("Projects from backend:", data); 
        setProjects(data);
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

    useEffect(() => {
    fetch("http://127.0.0.1:8000/api/other-projects/")   
      .then((res) => res.json())
      .then((data) => {
        console.log("Projects from backend:", data); 
        setoProjects(data);
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

          const ICONS = {
          HiOutlineFire: HiOutlineFire,
          HiOutlineLightBulb: HiOutlineLightBulb,
          HiOutlineSparkles: HiOutlineSparkles,
        };
  const IconComponent = ICONS[oprojects.icon_name] || HiOutlineSparkles||HiOutlineLightBulb||HiOutlineFire;

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
              Portfolio
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 
              to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent"
            >
              Featured Projects
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300"
            >
              A showcase of my best work, featuring web applications, design projects, and experiments.
            </motion.p>
          </motion.div>
        </div>
      </section>
    
   
    
      {/* Featured Projects */}
      <section className="relative py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="space-y-32">
              {fprojects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                  gap-12 items-center`}
                >
                 {/* Project Image */}
                  <div className="w-full lg:w-3/5 relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 
                    rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />

                    <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl 
                    p-4 border border-gray-100 dark:border-gray-700 shadow-lg group-hover:shadow-xl 
                    transition-all">

                      <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                    </div>
                  </div>


                  {/* Project Info */}
                  <div className="w-full lg:w-2/5">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {project.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <FiStar className="text-blue-600 dark:text-blue-400" />
                          <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm font-medium bg-blue-50 dark:bg-blue-900/30 
                          text-blue-600 dark:text-blue-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium 
                        text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border 
                        border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 
                        dark:hover:bg-gray-700 transition-colors"
                      >
                        <FiGithub />
                        View Code
                      </a>
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium 
                        text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg 
                        hover:from-blue-700 hover:to-purple-700 transition-colors"
                      >
                        <FiExternalLink />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Projects */}
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
              Other Noteworthy Projects
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
            >
              A collection of smaller projects and experiments I've worked on.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {oprojects.map((project, index) => (
              
              <motion.a
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl 
                p-6 border border-gray-100 dark:border-gray-700 shadow-lg group-hover:shadow-xl 
                transition-all h-full">
                  <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-blue-500 
                  to-purple-500 flex items-center justify-center text-white">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 
                        text-blue-600 dark:text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-8"
          >
            {[
              { icon: FiCode, value: '50K+', label: 'Lines of Code' },
              { icon: FiLayers, value: '30+', label: 'Projects Completed' },
              { icon: FiStar, value: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl 
                p-6 border border-gray-100 dark:border-gray-700 shadow-lg group-hover:shadow-xl 
                transition-all text-center">
                  <stat.icon className="w-8 h-8 mb-4 mx-auto text-blue-600 dark:text-blue-400" />
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 
                  bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 
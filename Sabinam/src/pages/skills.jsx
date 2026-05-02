import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout, FiServer, FiTool, FiAward } from 'react-icons/fi';
import { HiOutlineLightBulb, HiOutlineChip, HiOutlineCube } from 'react-icons/hi';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FiLayout,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
      ]
    },
    {
      title: 'Backend Development',
      icon: FiServer,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'FastAPI', level: 75 },
      ]
    },
    {
      title: 'Database',
      icon: FiDatabase,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Firebase', level: 85 },
      ]
    }
  ];

  const technologies = [
    {
      category: 'Development Tools',
      icon: FiTool,
      items: ['VS Code', 'Git', 'Docker', 'Postman', 'Figma']
    },
    {
      category: 'Cloud Services',
      icon: HiOutlineChip,
      items: ['AWS', 'Google Cloud', 'Vercel', 'Netlify']
    },
    {
      category: 'Testing',
      icon: HiOutlineCube,
      items: ['Jest', 'React Testing Library', 'Cypress', 'Playwright']
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: FiAward
    },
    {
      title: 'Professional Web Developer',
      issuer: 'Meta',
      date: '2023',
      icon: FiCode
    },
    {
      title: 'Machine Learning Specialist',
      issuer: 'Google',
      date: '2023',
      icon: HiOutlineLightBulb
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
              Skills & Expertise
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 
              to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent"
            >
              Technical Proficiency
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300"
            >
              A comprehensive overview of my technical skills, expertise, and professional certifications.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="relative py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl 
                p-6 border border-gray-100 dark:border-gray-700 shadow-lg group-hover:shadow-xl 
                transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 
                    to-purple-500 flex items-center justify-center text-white">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Technologies & Tools
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
            >
              A collection of development tools and technologies I work with.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl 
                p-6 border border-gray-100 dark:border-gray-700 shadow-lg group-hover:shadow-xl 
                transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 
                    to-purple-500 flex items-center justify-center text-white">
                      <tech.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {tech.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 text-sm font-medium bg-blue-50 dark:bg-blue-900/30 
                        text-blue-600 dark:text-blue-400 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative py-20">
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
              Certifications
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
            >
              Professional certifications and achievements.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certifications.map((cert, index) => (
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
                transition-all">
                  <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-blue-500 
                  to-purple-500 flex items-center justify-center text-white">
                    <cert.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {cert.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills; 
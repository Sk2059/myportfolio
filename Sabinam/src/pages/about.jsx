import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiAward, FiCode, FiUsers, FiBook } from 'react-icons/fi';
import { HiOutlineLightBulb, HiOutlineSparkles, HiOutlineCube } from 'react-icons/hi';

const About = () => {
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

  const skills = [
    { name: 'Frontend Development', level: 90 },
    { name: 'Backend Development', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Database Management', level: 85 },
    { name: 'Cloud Services', level: 75 },
    { name: 'DevOps', level: 70 }
  ];

  const journey = [
    {
      year: '2023',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovation Labs',
      description: 'Leading development of enterprise-scale applications.'
    },
    {
      year: '2021',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Inc',
      description: 'Developed and maintained multiple client projects.'
    },
    {
      year: '2019',
      title: 'Frontend Developer',
      company: 'Web Creators',
      description: 'Specialized in creating responsive web applications.'
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
              About Me
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 
              to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent"
            >
              Turning Vision Into Reality
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              A passionate full-stack developer with a love for clean code and user-centric design. 
              I specialize in building exceptional digital experiences.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-4"
            >
              <a
                href="/resume.pdf"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white 
                bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 
                hover:to-purple-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              >
                Download Resume
                <FiDownload className="ml-2" />
              </a>
              <a
                href="#journey"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 
                dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transform hover:scale-105 
                transition-all shadow-lg hover:shadow-xl"
              >
                My Journey
                <FiArrowRight className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="text-center mb-16">
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
              >
                Professional Skills
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
              >
                Expertise gained through years of real-world experience and continuous learning.
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6
                  border border-gray-100 dark:border-gray-700 shadow-lg group hover:shadow-xl 
                  transition-all"
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    />
                  </div>
                  <span className="absolute top-6 right-6 text-sm font-medium text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="text-center mb-16">
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
              >
                Professional Journey
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
              >
                The path that led me to where I am today.
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 
              bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600" />

              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center justify-between mb-8 
                  ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6
                    border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold mt-1 mb-1 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">
                        {item.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 
                  rounded-full border-4 border-white dark:border-gray-800 bg-gradient-to-r 
                  from-blue-600 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold">{journey.length - index}</span>
                  </div>
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </motion.div>
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
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: FiAward, value: '5+', label: 'Years Experience' },
              { icon: FiCode, value: '50+', label: 'Projects Completed' },
              { icon: FiUsers, value: '30+', label: 'Happy Clients' },
              { icon: FiBook, value: '15+', label: 'Technologies' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6
                border border-gray-100 dark:border-gray-700 shadow-lg group-hover:shadow-xl 
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

export default About; 
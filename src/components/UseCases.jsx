import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Compass, Rocket, Building2, ChevronRight } from 'lucide-react'

const cases = [
  {
    title: "Recent Graduates",
    description: "Find entry-level positions matched to your education and skills.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    for: "jobseekers",
    gradient: "from-gray-700 to-gray-900"
  },
  {
    title: "Career Changers",
    description: "Discover opportunities in new industries that value your transferable skills.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    icon: <Compass className="w-8 h-8 text-white" />,
    for: "jobseekers",
    gradient: "from-gray-700 to-gray-900"
  },
  {
    title: "Startups",
    description: "Build your dream team without a dedicated HR department.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    icon: <Rocket className="w-8 h-8 text-white" />,
    for: "employers",
    gradient: "from-gray-700 to-gray-900"
  },
  {
    title: "Enterprises",
    description: "Enhance your existing recruiting workflow with AI assistance.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    icon: <Building2 className="w-8 h-8 text-white" />,
    for: "employers",
    gradient: "from-gray-600 to-gray-800"
  }
]

const UseCases = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-dark-100 mb-4">Who We Serve</h2>
        <p className="text-xl text-gray-600 dark:text-dark-200 max-w-3xl mx-auto">
          HireBuddy helps both job seekers and employers succeed
        </p>
      </motion.div>
      
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6 text-red-600">For Job Seekers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.filter(item => item.for === "jobseekers").map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" 
              }}
              className="rounded-xl overflow-hidden shadow-md relative group"
            >
              {/* Image with overlay gradient */}
              <div className="relative h-48">
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-80 z-10`}></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white absolute bottom-4 left-4 z-20">{item.title}</h3>
              </div>
              
              {/* Content */}
              <div className="p-6 bg-white dark:bg-dark-900">
                <p className="text-gray-700 dark:text-dark-200">{item.description}</p>
                <div className="mt-4 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-red-600 dark:text-red-500 font-medium flex items-center"
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-dark-100">For Employers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.filter(item => item.for === "employers").map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" 
              }}
              className="rounded-xl overflow-hidden shadow-md relative group"
            >
              {/* Image with overlay gradient */}
              <div className="relative h-48">
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-80 z-10`}></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white absolute bottom-4 left-4 z-20">{item.title}</h3>
              </div>
              
              {/* Content */}
              <div className="p-6 bg-white dark:bg-dark-900">
                <p className="text-gray-700 dark:text-dark-200">{item.description}</p>
                <div className="mt-4 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-800 dark:text-dark-100 font-medium flex items-center"
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases
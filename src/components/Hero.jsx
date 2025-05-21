import React from 'react'
import { motion } from 'framer-motion'
import { Search, Users } from 'lucide-react'

const Hero = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-dark-100">
            Connecting <span className="text-red-600">T</span>alent & Opportunity
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-dark-200">
            AI-powered platform that simplifies job searching for candidates and streamlines recruitment for employers.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.button
              className="px-8 py-3 bg-gray-800 dark:bg-dark-800 text-white rounded-lg text-lg font-medium flex items-center space-x-2"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#1a1a1a" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
              <span>Find Jobs</span>
            </motion.button>
            
            <motion.button
              className="px-8 py-3 border-2 border-gray-800 dark:border-dark-200 text-gray-800 dark:text-dark-100 rounded-lg text-lg font-medium flex items-center space-x-2"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(249, 250, 251, 0.1)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="w-5 h-5" />
              <span>Hire Talent</span>
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] w-full bg-gray-100 dark:bg-dark-800 rounded-xl overflow-hidden"
        >
          {/* This would be your product illustration/demo */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="w-[80%] h-[70%] bg-white dark:bg-dark-850 rounded-lg shadow-xl flex items-center justify-center">
              <p className="text-gray-400 dark:text-dark-300 font-medium">Interactive HireBuddy Logo</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
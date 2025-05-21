import React from 'react'
import { motion } from 'framer-motion'
import { Search, Users } from 'lucide-react'

const CallToAction = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-800 dark:bg-dark-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to transform your career or hiring process?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl mb-12 text-gray-300 dark:text-dark-200 max-w-3xl mx-auto"
        >
          Whether you're looking for your next opportunity or your next great hire, 
          HireBuddy is here to help you succeed.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-red-600 rounded-lg text-lg font-medium flex items-center justify-center space-x-2"
            animate={{
              boxShadow: ["0px 0px 0px rgba(239, 68, 68, 0)", "0px 0px 15px rgba(239, 68, 68, 0.5)", "0px 0px 0px rgba(239, 68, 68, 0)"]
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              boxShadow: {
                duration: 2,
                repeat: Infinity
              }
            }}
          >
            <Search className="w-5 h-5" />
            <span>Find Jobs</span>
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white dark:bg-dark-800 text-gray-800 dark:text-white rounded-lg text-lg font-medium flex items-center justify-center space-x-2"
            transition={{
              duration: 0.6,
              delay: 0.3
            }}
          >
            <Users className="w-5 h-5" />
            <span>Hire Talent</span>
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Building, Image } from 'lucide-react'

const screenshots = {
  jobseeker: [
    {
      title: "Job Recommendations",
      description: "Personalized job matches based on your skills and preferences",
      icon: <Image className="w-12 h-12 text-red-400" />
    },
    {
      title: "Resume Builder",
      description: "AI-powered resume optimization for better application outcomes",
      icon: <Image className="w-12 h-12 text-red-400" />
    },
    {
      title: "Interview Practice",
      description: "Interactive interview practice with AI feedback",
      icon: <Image className="w-12 h-12 text-red-400" />
    }
  ],
  employer: [
    {
      title: "Candidate Dashboard",
      description: "Centralized view of all your active job postings and candidates",
      icon: <Image className="w-12 h-12 text-gray-500" />
    },
    {
      title: "Candidate Screening",
      description: "AI-powered candidate evaluation and matching system",
      icon: <Image className="w-12 h-12 text-gray-500" />
    },
    {
      title: "Interview Calendar",
      description: "Streamlined scheduling for your entire hiring team",
      icon: <Image className="w-12 h-12 text-gray-500" />
    }
  ]
};

const Screenshots = () => {
  const [activeTab, setActiveTab] = useState("jobseeker");
  
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-dark-100 mb-4">See It In Action</h2>
        <p className="text-xl text-gray-600 dark:text-dark-200 max-w-3xl mx-auto">
          Powerful features designed for both job seekers and employers
        </p>
      </motion.div>
      
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button 
            onClick={() => setActiveTab("jobseeker")}
            className={`px-6 py-2 text-lg font-medium rounded-l-lg flex items-center space-x-2 ${
              activeTab === "jobseeker" 
                ? "bg-red-600 text-white" 
                : "bg-gray-200 dark:bg-dark-800 text-gray-700 dark:text-dark-200"
            }`}
          >
            <User className="w-5 h-5" />
            <span>Job Seeker Portal</span>
          </button>
          <button 
            onClick={() => setActiveTab("employer")}
            className={`px-6 py-2 text-lg font-medium rounded-r-lg flex items-center space-x-2 ${
              activeTab === "employer" 
                ? "bg-gray-800 dark:bg-dark-800 text-white" 
                : "bg-gray-200 dark:bg-dark-850 text-gray-700 dark:text-dark-200"
            }`}
          >
            <Building className="w-5 h-5" />
            <span>Employer Portal</span>
          </button>
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {screenshots[activeTab].map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl overflow-hidden shadow-md"
            >
              <div className={`h-60 flex items-center justify-center ${
                activeTab === "jobseeker" 
                  ? "bg-red-100 dark:bg-red-900/30" 
                  : "bg-gray-200 dark:bg-dark-800"
              }`}>
                {screenshot.icon}
              </div>
              <div className="p-6 bg-white dark:bg-dark-900">
                <h3 className="text-xl font-bold text-gray-800 dark:text-dark-100 mb-2">{screenshot.title}</h3>
                <p className="text-gray-600 dark:text-dark-200">{screenshot.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default Screenshots
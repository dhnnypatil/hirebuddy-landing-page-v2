import React from 'react'
import { motion } from 'framer-motion'
import { Target, FileText, Mic, Search, Calendar, Database } from 'lucide-react'

const features = [
  {
    title: "Smart Job Matching",
    description: "AI matches job seekers with positions that fit their skills and career goals.",
    icon: <Target className="w-10 h-10 text-red-600" />,
    forJobSeeker: true
  },
  {
    title: "Resume Optimization",
    description: "Get AI suggestions to improve your resume for better visibility.",
    icon: <FileText className="w-10 h-10 text-red-600" />,
    forJobSeeker: true
  },
  {
    title: "Interview Preparation",
    description: "Practice with AI-simulated interviews tailored to your target roles.",
    icon: <Mic className="w-10 h-10 text-red-600" />,
    forJobSeeker: true
  },
  {
    title: "Candidate Screening",
    description: "AI-powered resume scanning to find the best candidates faster.",
    icon: <Search className="w-10 h-10 text-gray-800" />,
    forEmployer: true
  },
  {
    title: "Interview Scheduling",
    description: "Seamlessly coordinate interviews between candidates and your team.",
    icon: <Calendar className="w-10 h-10 text-gray-800" />,
    forEmployer: true
  },
  {
    title: "Talent Pipeline",
    description: "Build and maintain a database of qualified candidates for future openings.",
    icon: <Database className="w-10 h-10 text-gray-800" />,
    forEmployer: true
  }
]

const HowItWorks = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 dark:bg-dark-850">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-dark-100 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-dark-200 max-w-3xl mx-auto">
            Our platform serves both job seekers and employers with powerful tools
          </p>
        </motion.div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-red-600">For Job Seekers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.filter(feature => feature.forJobSeeker).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-dark-100 mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-dark-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-dark-100">For Employers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.filter(feature => feature.forEmployer).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-dark-100 mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-dark-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Users, User, Building } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Director, TechStart Inc.",
    text: "HireBuddy has cut our hiring process time by 60%. We've found better candidates faster than ever before.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    type: "employer"
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    text: "After optimizing my resume with HireBuddy's AI tools, I received triple the interview requests within just two weeks.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    type: "jobseeker"
  },
  {
    name: "Priya Patel",
    role: "Recruiting Manager, Enterprise Solutions",
    text: "The AI-powered screening has dramatically improved our candidate quality. Our hiring managers are thrilled with the results.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    type: "employer"
  },
  {
    name: "James Wilson",
    role: "Career Changer",
    text: "HireBuddy helped me transition from teaching to tech by highlighting my transferable skills. I landed my dream job in just 6 weeks!",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    type: "jobseeker"
  }
]

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("all"); // "all", "jobseeker", or "employer"
  
  const filteredTestimonials = 
    filter === "all" 
      ? testimonials 
      : testimonials.filter(t => t.type === filter);
  
  const next = () => setActive((active + 1) % filteredTestimonials.length);
  const prev = () => setActive((active - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 dark:bg-dark-850">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-dark-100 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 dark:text-dark-200 max-w-3xl mx-auto">
            Hear from both job seekers and employers using HireBuddy
          </p>
          
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={() => { setFilter("all"); setActive(0); }} 
              className={`px-4 py-2 rounded flex items-center space-x-2 ${filter === "all" ? "bg-gray-800 dark:bg-dark-800 text-white" : "bg-gray-200 dark:bg-dark-900 text-gray-800 dark:text-dark-200"}`}
            >
              <Users className="w-4 h-4" />
              <span>All</span>
            </button>
            <button 
              onClick={() => { setFilter("jobseeker"); setActive(0); }} 
              className={`px-4 py-2 rounded flex items-center space-x-2 ${filter === "jobseeker" ? "bg-red-600 text-white" : "bg-gray-200 dark:bg-dark-900 text-gray-800 dark:text-dark-200"}`}
            >
              <User className="w-4 h-4" />
              <span>Job Seekers</span>
            </button>
            <button 
              onClick={() => { setFilter("employer"); setActive(0); }} 
              className={`px-4 py-2 rounded flex items-center space-x-2 ${filter === "employer" ? "bg-gray-800 dark:bg-dark-800 text-white" : "bg-gray-200 dark:bg-dark-900 text-gray-800 dark:text-dark-200"}`}
            >
              <Building className="w-4 h-4" />
              <span>Employers</span>
            </button>
          </div>
        </motion.div>
        
        <div className="relative h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active + filter}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark-900 p-8 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={filteredTestimonials[active].avatar} 
                  alt={filteredTestimonials[active].name} 
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-dark-100">{filteredTestimonials[active].name}</h3>
                  <p className="text-gray-600 dark:text-dark-200">{filteredTestimonials[active].role}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 dark:text-dark-200 italic">"{filteredTestimonials[active].text}"</p>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center space-x-4">
            <button 
              onClick={prev}
              className="p-2 bg-gray-200 dark:bg-dark-800 rounded-full hover:bg-gray-300 dark:hover:bg-dark-850 flex items-center justify-center text-gray-700 dark:text-dark-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={next}
              className="p-2 bg-gray-200 dark:bg-dark-800 rounded-full hover:bg-gray-300 dark:hover:bg-dark-850 flex items-center justify-center text-gray-700 dark:text-dark-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
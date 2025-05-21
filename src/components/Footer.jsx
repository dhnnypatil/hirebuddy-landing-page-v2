import React from 'react'
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-100">
              Hire<span className="text-red-600">B</span>uddy
            </h2>
            <p className="text-gray-600 dark:text-dark-200 mt-1">Connecting talent with opportunity</p>
          </div>
          
          <div className="flex space-x-4">
            {/* Social Icons using Lucide */}
            <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-dark-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-dark-850 transition-colors">
              <Twitter className="text-gray-600 dark:text-dark-200 w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-dark-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-dark-850 transition-colors">
              <Linkedin className="text-gray-600 dark:text-dark-200 w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-dark-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-dark-850 transition-colors">
              <Facebook className="text-gray-600 dark:text-dark-200 w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-dark-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-dark-850 transition-colors">
              <Instagram className="text-gray-600 dark:text-dark-200 w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-dark-100">For Job Seekers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-dark-200 hover:text-gray-800 dark:hover:text-white">Browse Jobs</a></li>
              <li><a href="#" className="text-gray-600 dark:text-dark-200 hover:text-gray-800 dark:hover:text-white">Resume Help</a></li>
              <li><a href="#" className="text-gray-600 dark:text-dark-200 hover:text-gray-800 dark:hover:text-white">Career Resources</a></li>
              <li><a href="#" className="text-gray-600 dark:text-dark-200 hover:text-gray-800 dark:hover:text-white">Interview Tips</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-dark-100">For Employers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-dark-200 hover:text-gray-800 dark:hover:text-white">Post a Job</a></li>
              <li><a href="#" className="text-gray-600 dark:text-dark-200 hover:text-gray-800 dark:hover:text-white">Search Candidates</a></li>
              <li><a href="#" className="text-gray-600 dark:text-dark-200 hover:text-gray-800 dark:hover:text-white">Recruitment Tools</a></li>
              <li><a href="#" className="text-gray-600 dark:text-dark-200 hover:text-gray-800 dark:hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-dark-100">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-dark-200 hover:text-gray-800 dark:hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-600 dark:text-dark-200 hover:text-gray-800 dark:hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-600 dark:text-dark-200 hover:text-gray-800 dark:hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-dark-200 hover:text-gray-800 dark:hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-dark-800 pt-8 text-center">
          <p className="text-gray-600 dark:text-dark-200">© 2025 HireBuddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
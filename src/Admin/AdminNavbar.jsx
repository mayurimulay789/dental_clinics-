import React from 'react'
import { Bell, Settings } from 'lucide-react'

export default function AdminNavbar({ children }) {
  return (
    <nav className="bg-white shadow-md dark:bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">Dental Hub Admin</span>
          </div>
          <div className="flex items-center">
            {children}
            <button className="p-2 ml-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 ml-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
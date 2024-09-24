import React from 'react'

export default function MainContent({ children }) {
  return (
    <main className="flex-grow p-6 bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">{children}</div>
    </main>
  )
}
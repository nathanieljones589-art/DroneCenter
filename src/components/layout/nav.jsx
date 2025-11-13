import React, { useState } from 'react'

export const Nav = () => {
  const [open,setOpen]=useState(false)
  return (
 <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-indigo-600 text-white rounded-md flex items-center justify-center font-semibold">
              TD
            </div>
            <span className="text-lg font-semibold text-gray-800">THRIFT DISTRICT</span>
          </a>

          <nav className="hidden md:flex md:items-center md:space-x-6">
            <a href="/" className="text-gray-600 hover:text-indigo-600">Home</a>
            <a href="/about" className="text-gray-600 hover:text-indigo-600">About</a>
            <a href="/contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            >
              {open ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="/" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">Home</a>
            <a href="/about" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">About</a>
            <a href="/contact" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">Contact</a>
          </div>
        </div>
      )}
 </>
  )
}

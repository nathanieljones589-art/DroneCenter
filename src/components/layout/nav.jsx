import React, { useState } from 'react'
import { useCart } from '../../context/CartContext'

export const Nav = () => {
  const [open,setOpen]=useState(false)
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
 <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-indigo-600 text-white rounded-md flex items-center justify-center font-semibold">
              DC
            </div>
            <span className="text-lg font-semibold text-gray-800">DRONECENTER</span>
          </a>

          <nav className="hidden md:flex md:items-center md:space-x-6">
            <a href="#home" className="text-gray-600 hover:text-indigo-600">Home</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="#cart" className="relative flex items-center">
              <svg className="w-6 h-6 text-gray-600 hover:text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </a>

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
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#home" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">Home</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">Contact</a>
            <a href="#cart" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">Cart</a>
          </div>
        </div>
      )}
 </>
  )
}

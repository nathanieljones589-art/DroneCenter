
import { useState, useEffect } from 'react'
import { Header } from './components/layout/header'
import { Allproducts } from './components/sections/products'
import { Best } from './components/sections/best'
import { Features } from './components/sections/features'
import { Hero } from './components/sections/hero'
import { NewStock } from './components/sections/newStock'
import Testimonials from './components/sections/testimonials'
import Footer from './components/layout/footer'
import SubscribeBar from './components/common/SubscribeBar'
import Cart from './components/sections/cart'
import { CartProvider } from './context/CartContext'


function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    // Simple routing based on hash
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home'
      setCurrentPage(hash)
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigation = (page) => {
    window.location.hash = page
  }

  return (
    <CartProvider>
     <Header/>
     {currentPage === 'home' ? (
       <>
         <Hero/>
         <Features/>
         <NewStock/>
         <Best/>
         <Allproducts/>
         <Testimonials/>
       </>
     ) : currentPage === 'cart' ? (
       <Cart />
     ) : (
       <>
         <Hero/>
         <Features/>
         <NewStock/>
         <Best/>
         <Allproducts/>
         <Testimonials/>
       </>
     )}
    <SubscribeBar />
    <Footer/>
    </CartProvider>
  )
}

export default App

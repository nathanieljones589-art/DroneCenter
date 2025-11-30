import React from 'react'
import { allProducts } from '../sections/allProducts'
import { useCart } from '../../context/CartContext'

export const Allproducts = () => {
  const { addToCart } = useCart()

  const handleAddToCart = (product) => {
    addToCart(product)
    alert(`${product.name} added to cart!`)
  }

  return (
    <section className='w-full py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>All Product</h1>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            The products we provide only for you as our service are selected from the best products with number 1 quality in the world
          </p>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {allProducts.map((item) => {
            return (
              <div key={item.id} className='flex flex-col'>
                {/* Product Image Container */}
                <div className='relative mb-4 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300'>
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className='w-full h-64 object-cover'
                  />
                  {/* Plus Button */}
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className='absolute bottom-4 right-4 w-10 h-10 bg-gray-400 hover:bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold transition-colors duration-300'
                  >
                    +
                  </button>
                </div>

                {/* Product Info */}
                <div className='flex-1'>
                  <h3 className='text-lg font-bold text-gray-900 mb-2 line-clamp-2'>
                    {item.name}
                  </h3>
                  
                  {/* Price */}
                  <div className='flex gap-3 items-center'>
                    <span className='text-gray-900 font-semibold'>
                      Ksh.{item.price.toLocaleString()}
                    </span>
                    <span className='text-gray-400 line-through text-sm'>
                      Ksh.{Math.round(item.price * 1.2).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { allProducts } from '../sections/allProducts'

export const Allproducts = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-6 p-10 bg-(--primary-color) text-(--text-color)'>
      <div className='text-center mb-6'>
        <h3>All products</h3>
        <p>The products we have in stock.</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full'>
        {allProducts.map( 
          (item)=>{
            return(
              <div key={item.id}>
                <img src={item.imageUrl} alt={item.name} className='w-full  object-cover rounded-md'
                 />
                <h3 className='text-lg font-semibold mt-2'
                >{item.name}</h3>
                <p className='text-gray-600'
                >{item.description}</p>
                <p className='text-gray-600'
                >ksh.{item.price.toFixed(2)}</p>
                <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'
                >Add to Cart</button>
                
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}

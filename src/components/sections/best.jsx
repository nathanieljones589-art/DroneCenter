import React from 'react'

export const Best = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-6 p-10 bg-(--primary-color) text-(--text-color) lg:flex-row lg:space-x-10 lg:space-y-0'>
        <div className='space-y-4 max-w-lg text-center lg:text-left'>
            <h3 className='font-bold capitalize text-2xl'>
                The best drones plug around you
            </h3>
            <p className='font-medium capitalize text-md '>
                We offer a wide range of high-quality drones that are perfect for any occasion.     !
                Whether you're looking for classic styles or the latest trends, we've got you covered. 
                Our drones are made from durable materials and designed to provide a comfortable fit, ensuring you look and feel your best. 
                Visit us today to find your perfect pair
             </p>
        </div>
        <div>
            <img src="https://i.pinimg.com/736x/e4/f3/5d/e4f35dac743b55d3a983b40dc3e7ca41.jpg" alt="best drones" className='rounded-2xl ' />
        </div>
    </div>
  )
}
import React from 'react'
import { Btn } from '../common/btn'
import { products } from '../../products'

export const Hero = () => {
  const heroProduct = products[0].imageUrl; // using first product for hero
  console.log(products)
  return (
    <>
      <div
        className=" font-bold h-screen w-screen flex flex-col justify-center p-10 space-y-6 text-(--text-color)"
        style={{ backgroundImage: `url(${heroProduct})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h2 className="text-center text-[1rem] sm:text-3xl text-(--text-color)">
          Fly High, Capture Dreams!<br/>
          Explore our premium drone collection<br/>
          For cutting-edge technology and innovation.<br/>
          Shop with us and elevate your aerial experience
        </h2>
        <Btn text="shop now" className="relative z-0" />
      </div>

      <div className='bg-(--secondary-color) border-2 border-(--text-color) rounded-lg w-full mx-auto -mt-2 relative z-20 p-4 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-0 items-center'>
        <div className="text-center p-4 border-r-2 border-b-2 md:border-b-0 border-(--text-color)">
          <h5 className="text-2xl md:text-3xl font-bold">12</h5>
          <p className="text-sm md:text-base">year experience</p>
        </div>
        <div className="text-center p-4 md:border-r-2 border-b-2 md:border-b-0 border-(--text-color)">
          <h5 className="text-2xl md:text-3xl font-bold">15</h5>
          <p className="text-sm md:text-base">opened in the country</p>
        </div>
        <div className="text-center p-4 border-r-2 border-(--text-color)">
          <h5 className="text-2xl md:text-3xl font-bold">10k+</h5>
          <p className="text-sm md:text-base">drones sold</p>
        </div>
        <div className="text-center p-4">
          <h5 className="text-2xl md:text-3xl font-bold">500+</h5>
          <p className="text-sm md:text-base">drone models</p>
        </div>
      </div>
    </>
  )
}

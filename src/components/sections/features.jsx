import React from 'react'
import { products } from '../../products'

export const Features = () => {
    const featureImage = products[2].imageUrl;
  return (
<>
    <div  className='flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-y-0 md:space-x-10 p-10 bg-(--secondary-color) text-(--text-color)'>
        <div>

            <img src={featureImage} className=' rounded-2xl' />
        </div>
        <div className=' text-2xl my-1 md:text-3xl lg:mt-23 space-y-4'>
            <h2 className='font-bold'>Get yourself an advanced drone</h2>
            <br/>
            <p>Discover high-quality drones at unbeatable prices in our drone shop. 
            </p>
                <ul>
                    <li>
                        • Cutting-edge drone technology   
                    </li>
                    <li>
                        • Affordable prices
                    </li>
                    <li>
                        • Expert-verified quality
                    </li>
                    <li>
                        • Premium performance drones
                    </li>
                </ul>
                 
           

        </div>
    </div>
</>
  )
}

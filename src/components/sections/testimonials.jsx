import React, { useState } from 'react'

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    { 
      name: 'Aisha Mwangi', 
      role: 'DCI', 
      quote: 'The best drone selection and amazing customer service!',
      image: 'https://i.pinimg.com/736x/ac/0f/83/ac0f8390c9665a5caf9efd9aadef6c68.jpg'
    },
    { 
      name: 'John Kamau', 
      role: 'video grapher', 
      quote: 'Quality drones at unbeatable prices.',
      image: 'https://i.pinimg.com/736x/74/79/f0/7479f03e26e1991ea6b6aacad039c8bf.jpg'
    },
    { 
      name: 'Tony Ali', 
      role: 'Head Master', 
      quote: 'I found amazing drones that my clients love.',
      image: 'https://i.pinimg.com/736x/dc/1b/16/dc1b165f2032d49a7559a0d9df666a4e.jpg'
    },
    { 
      name: 'Sara Njeri', 
      role: 'Photographer', 
      quote: 'Exceptional variety and top-notch quality!',
      image: 'https://i.pinimg.com/736x/b9/c4/53/b9c4539c094848a95548a26e1fe6a207.jpg'
    },

    

  ]

  const currentTestimonial = testimonials[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen py-12">
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-8">What People Are Saying About Us</h1>
          
          <div className="flex items-center mb-6">
            <img 
              src={currentTestimonial.image} 
              alt={currentTestimonial.name} 
              className="rounded-full mr-4 w-[100px] h-[100px] object-cover" 
            />
            <div>
              <h2 className="text-lg font-bold">{currentTestimonial.name}</h2>
              <p className="text-gray-500">{currentTestimonial.role}</p>
            </div>
          </div>
          
          <p className="text-gray-700 mb-8 text-lg">"{currentTestimonial.quote}"</p>

          {/* Navigation Buttons */}
          <div className="flex gap-4 items-center">
            <button 
              onClick={handlePrev}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
            >
              ← Previous
            </button>
            
            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
            >
              Next →
            </button>
          </div>
        </div>

        <div className="md: fit p-8">
          <img 
            src="https://i.pinimg.com/736x/65/ca/3c/65ca3c03a8a81f16feaca61908a940ae.jpg" 
            alt="Testimonial" 
            className="w-full h-auto rounded-lg" 
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonials

import React from 'react'

export const Testimonials = () => {
  const testimonials = [
    { name: 'Aisha Mwangi', role: 'Fashion Designer', quote: 'Great selection and amazing customer service!' },
    { name: 'James K.', role: 'Buyer', quote: 'Quality products at unbeatable prices.' },
    { name: 'Lina S.', role: 'Stylist', quote: 'I found unique pieces that my clients love.' },
  ]

  return (
    <section className="py-12 bg-gray-50" aria-label="Customer testimonials">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center">What Our Customers Say</h2>
        <p className="text-center text-gray-500 mt-1 mb-6">Real reviews from happy shoppers</p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <article className="bg-white p-4 rounded-lg shadow" key={i}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 text-white flex items-center justify-center font-bold">
                  {t.name.split(' ').map(n => n[0]).slice(0,2).join('')}
                </div>
                <div>
                  <h3 className="text-sm font-medium">{t.name}</h3>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="mt-3 text-gray-700 italic">“{t.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

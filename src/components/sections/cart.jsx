import React from 'react'
import { useCart } from '../../context/CartContext'

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  if (cart.length === 0) {
    return (
      <section className='w-full py-16 bg-gray-50 min-h-screen'>
        <div className='max-w-4xl mx-auto px-4'>
          <h1 className='text-4xl font-bold mb-8'>Shopping Cart</h1>
          <div className='bg-white rounded-lg shadow p-8 text-center'>
            <p className='text-xl text-gray-600 mb-4'>Your cart is empty</p>
            <a href='/' className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition'>
              Continue Shopping
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className='w-full py-16 bg-gray-50 min-h-screen'>
      <div className='max-w-6xl mx-auto px-4'>
        <h1 className='text-4xl font-bold mb-8'>Shopping Cart</h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Cart Items */}
          <div className='lg:col-span-2'>
            <div className='bg-white rounded-lg shadow overflow-hidden'>
              {cart.map((item) => (
                <div key={item.id} className='flex items-center gap-4 p-6 border-b last:border-b-0 hover:bg-gray-50 transition'>
                  {/* Product Image */}
                  <img 
                    src={item.imageUrl} 
                    alt={item.name}
                    className='w-24 h-24 object-cover rounded'
                  />

                  {/* Product Info */}
                  <div className='flex-1'>
                    <h3 className='text-lg font-bold text-gray-900 mb-1'>{item.name}</h3>
                    <p className='text-gray-600 text-sm mb-2'>Ksh.{item.price.toLocaleString()}</p>
                    <p className='text-sm text-gray-500'>Subtotal: Ksh.{(item.price * item.quantity).toLocaleString()}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className='flex items-center gap-2 bg-gray-100 rounded-lg p-2'>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className='w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition'
                    >
                      −
                    </button>
                    <span className='w-8 text-center font-semibold'>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className='w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition'
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition'
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-lg shadow p-6 sticky top-4'>
              <h2 className='text-2xl font-bold mb-6'>Order Summary</h2>

              <div className='space-y-4 mb-6'>
                <div className='flex justify-between text-gray-600'>
                  <span>Subtotal</span>
                  <span>Ksh.{getTotalPrice().toLocaleString()}</span>
                </div>
                <div className='flex justify-between text-gray-600'>
                  <span>Shipping</span>
                  <span>Ksh.0</span>
                </div>
                <div className='flex justify-between text-gray-600'>
                  <span>Tax</span>
                  <span>Ksh.0</span>
                </div>
              </div>

              <div className='border-t pt-4 mb-6'>
                <div className='flex justify-between text-xl font-bold'>
                  <span>Total</span>
                  <span>Ksh.{getTotalPrice().toLocaleString()}</span>
                </div>
              </div>

              <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition mb-3'>
                Checkout
              </button>

              <button
                onClick={clearCart}
                className='w-full bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-3 rounded-lg transition mb-3'
              >
                Clear Cart
              </button>

              <a
                href='/'
                className='block text-center text-blue-600 hover:text-blue-700 font-semibold py-2 transition'
              >
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart

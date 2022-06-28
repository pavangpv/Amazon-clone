import React from 'react'
import "./Checkout.css"
const Checkout = () => {
  return (
    <div className='checkout'>
        <div className='checkout_cart'>
        <h2 className='checkout_title'>Shopping Cart</h2>
        </div>
        <div className='checkout_right'>
        <h2>Subtotal</h2>
        </div>
    </div>
  )
}

export default Checkout
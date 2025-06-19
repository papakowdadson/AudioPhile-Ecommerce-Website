import React from 'react'

const CartCounterButton = ({label,handleIncrement,handleDecrement}) => {
  return (
    <div className='flex gap-4 bg-tertiary_grey text-secondary_black px-4 py-2 rounded-sm   transition-colors duration-300 w-fit'>
      <button onClick={handleDecrement} className='text-body text-secondary_black_25 font-bold hover:text-primary_orange_hovered cursor-pointer' >-</button>
      <p className='text-body font-bold' >{label}</p>
      <button onClick={handleIncrement} className='text-body text-secondary_black_25 font-bold hover:text-primary_orange_hovered cursor-pointer' >+</button>

    </div>
  )
}

export default CartCounterButton

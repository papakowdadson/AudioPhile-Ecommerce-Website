import React from 'react'

const CartCounterButton = ({label,handleIncrement,handleDecrement,item}) => {
  console.log("====CArt counter item======")
  console.log(item)
  return (
    <div className='flex gap-4 bg-tertiary_grey text-secondary_black px-4 py-2 rounded-sm   transition-colors duration-300 w-fit'>
      {/* cart counter button is used on both product details and cart modal screen hence the conditional rendering */}
      <button onClick={()=>item?handleDecrement(item.id):handleDecrement()} className='text-body text-secondary_black_25 font-bold hover:text-primary_orange_hovered cursor-pointer' >-</button>
      <p className='text-body font-bold' >{label}</p>
      <button onClick={()=>item?handleIncrement(item.id,item):handleIncrement()} className='text-body text-secondary_black_25 font-bold hover:text-primary_orange_hovered cursor-pointer' >+</button>

    </div>
  )
}

export default CartCounterButton

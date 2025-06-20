import React from 'react'
import CartCounterButton from './CartCounterButton'

const CartItem = ({item,handleIncrement,handleDecrement}) => {
  return (
    <div className='flex justify-between items-center gap-10'>
        <div className='flex gap-4'>
            <img alt={item.name} src={item.image} className='rounded-md h-16 w-16 object-cover' />
            <div className='flex flex-col justify-between'>
                <h1 className='text-body font-bold text-secondary_black'>
                    {item.name}
                </h1>
                <p className='text-overline font-bold text-secondary_black_50'>
                    {`$ ${item.price}`}
                </p>

            </div>
        </div>
        <CartCounterButton label={item.qty} handleDecrement={handleDecrement} handleIncrement={handleIncrement} item={item}/>
      
    </div>
  )
}

export default CartItem

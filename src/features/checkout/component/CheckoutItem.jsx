import React from 'react'

const CheckoutItem = ({item}) => {
  return (
    <div className="flex items-center gap-2">
          <img src={item.image} alt="Order" className="rounded-lg w-16 h-16" />
          <div className='flex flex-1 justify-between gap-2'>
            <div className='space-y-2'>
              <p className="text-body font-bold">{item.name.split(" ").slice(0, -1).join(" ")}</p>
              <p className="text-secondary_black_50 text-body">{`$ ${item.price}`}</p>
            </div>
            <p className="text-secondary_black_50 text-body">{`x ${item.qty}`}</p>
          </div>
          
    </div>
  )
}


export default CheckoutItem

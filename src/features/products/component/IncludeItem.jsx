import React from 'react'

const IncludeItem = ({include}) => {
  return (
    <div>
      <p className='space-x-4'> 
          <span className='text-primary_orange font-bold' >{include.quantity}X</span> 
          <span className='text-body text-secondary_black_50' >{include.item}</span> 
      </p>
    </div>
  )
}

export default IncludeItem

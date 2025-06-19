import React from 'react'
import IncludeItem from './IncludeItem'

const ProductFeatures = ({features,includes}) => {
  return (
    <div className='flex gap-8 justify-between'>
      <div className='space-y-8 flex-1'>
        <h1 className='text-h3 font-bold'>FEATURES</h1>
        <p className='text-body text-secondary_black_50' >{features}</p>
      </div>
      <div className='space-y-8 min-w-[350px] '>
        <h1 className='text-h3 font-bold'>IN THE BOX</h1>
        <div >
          {includes.map((include)=><IncludeItem include={include}  />)}
        </div>

      </div>
      
    </div>
  )
}

export default ProductFeatures

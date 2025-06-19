import React from 'react'
import RelatedProduct from './RelatedProduct'

const RelatedProducts = ({relatedProducts}) => {
  return (
    <div className='space-y-8'>
     <h3 className='text-h3 text-center font-bold'>YOU MAY ALSO LIKE</h3>
     <div className='flex gap-8'>
      {
      relatedProducts.map((product,index)=>  <RelatedProduct key={index} product={product}/>
        )
     }
     </div>
     
    </div>
  )
}

export default RelatedProducts

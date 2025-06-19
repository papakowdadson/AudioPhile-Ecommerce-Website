import React from 'react'
import CategoryProduct from './component/CategoryProduct'

const CategoryProductsSection = ({data}) => {
  return (
    <div className='space-y-14'>
        {data.map((item,index)=> (<CategoryProduct key={index} product={item} index={index}/>)
        )}
      
    </div>
  )
}

export default CategoryProductsSection

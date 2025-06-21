import React from 'react'
import PrimaryButton from '../../../components/primaryButton'
import { useNavigate } from 'react-router-dom'

const CategoryProduct = ({product,index}) => {
    const navigate = useNavigate()
    const handleClick =(slug)=>{
                navigate(`/products/productdetails/${slug}`)
    }
  return (
    <div className={`flex max-md:flex-col justify-between items-center gap-8 ${index%2==0?'flex-row':'flex-row-reverse'}`} >
        <div className='bg-tertiary_grey rounded-lg p-8 w-[480px] max-md:w-full'>
            <img src={`${product.image.desktop}`} alt={product.name}/>
        </div>
        <div className='space-y-6 max-w-[445px] max-md:max-w-full max-md:flex max-md:flex-col max-md:items-center max-md:text-center' >
            {product.new&&<p className='text-primary_orange'>New Product</p>}
            <h1 className='text-h1 max-sm:text-h4' >
              <span>{product.name.split(' ').slice(0,-1).join(" ")}</span>
                <br/>
              <span>{product.name.split(' ').at(-1)}</span>
            </h1>
            <p className='text-body text-secondary_black_50 font-medium'>{product.description}</p>
            <PrimaryButton isFullWidth={false} label={'See Product'} onClick={()=>handleClick(product.slug)} />
        </div>
      
    </div>
  )
}

export default CategoryProduct

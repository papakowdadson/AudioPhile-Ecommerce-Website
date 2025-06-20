import React from 'react'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../../../components/primaryButton'

const RelatedProduct = ({product}) => {
    const navigate = useNavigate()
    const handleClick =(slug)=>{
        navigate(`/products/productdetails/${slug}`)
    }

  return (
    <div className='space-y-8 flex-col flex justify-center items-center'>
        <div className='bg-tertiary_grey'>
            <img alt={product.name} src={product.image.desktop}/>
        </div>
        <h1 className='text-h5 font-bold' >
            {product.name}
        </h1>
        <PrimaryButton isFullWidth={false} label={'See Product'} onClick={()=>handleClick(product.slug)} />

    </div>
  )
}

export default RelatedProduct

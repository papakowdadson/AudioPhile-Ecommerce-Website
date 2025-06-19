import React from 'react'
import DetailProduct from './component/DetailProduct'
import RelatedProducts from './component/RelatedProducts'
import ProductFeatures from './component/ProductFeatures'
import ProductGallery from './component/ProductGallery'

const ProductDetailsSection = ({product}) => {
  return (
    <div className='space-y-16'>
        <DetailProduct product={product}/>
        <ProductFeatures features={product.features} includes={product.includes}/>
        <ProductGallery gallery={product.gallery}/>
        <RelatedProducts relatedProducts={product.others}/>
      
    </div>
  )
}

export default ProductDetailsSection

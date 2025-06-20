import React from 'react'
import Product from './components/Product'
import HeadphonesImage from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import SpeakersImage from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import EarphonesImage from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'

const ProductsSection = () => {
  return (
    <div className='flex gap-8 max-sm:flex-col'>
        <Product image={HeadphonesImage} name={'HEADPHONES'} pathName={'SHOP'} path={'/products?category=headphones'} />
        <Product image={SpeakersImage} name={'SPEAKERS'} pathName={'SHOP'} path={'/products?category=speakers'} />
        <Product image={EarphonesImage} name={'EARPHONES'} pathName={'SHOP'} path={'/products?category=earphones'} />
    </div>
  )
}

export default ProductsSection

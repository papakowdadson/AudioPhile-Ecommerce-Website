import React from 'react'
import Product from './components/Product'
import HeadphonesImage from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import SpeakersImage from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import EarphonesImage from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'

const ProductsSection = ({handleCloseModal}) => {
  return (
    <div className='flex gap-8 max-sm:flex-col'>
        <Product handleCloseModal={handleCloseModal} image={HeadphonesImage} name={'HEADPHONES'} pathName={'SHOP'} path={'/products?category=headphones'} />
        <Product handleCloseModal={handleCloseModal} image={SpeakersImage} name={'SPEAKERS'} pathName={'SHOP'} path={'/products?category=speakers'} />
        <Product handleCloseModal={handleCloseModal} image={EarphonesImage} name={'EARPHONES'} pathName={'SHOP'} path={'/products?category=earphones'} />
    </div>
  )
}

export default ProductsSection

import React from 'react'
import PrimaryButton from '../../components/primaryButton'
import ScreenCap from '../../layout/ScreenCap'
import imageHero from '../../assets/home/desktop/image-hero.png' 
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()
    const handleSeeProduct=(slug)=>{
        navigate(`/products/productdetails/${slug}`)

    }

  return (
    <div className='bg-[#121212]' >
      <ScreenCap>
        <div className='flex justify-between pl-2 pr-2 items-center gap-8 h-[calc(100svh-96px)]'>
            <div className='space-y-6 text-tertiary_grey flex-1'>
                <p className='text-overline' >New Product</p>
                <h1 className='text-h1' >XX99 Mark II Headphones</h1>
                <p className='text-body' >
                    Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                </p>
                <PrimaryButton label={'See Products'} onClick={()=>handleSeeProduct('xx99-mark-two-headphones')} />

            </div>
            <div className='flex-2'>
                <img 
                    src={imageHero} 
                    alt='XX99 Mark II Headphones' 
                    className='w-full object-cover sm:h-[80svh] '
                />

            </div>
        </div>
        
      </ScreenCap>
    </div>
  )
}

export default Banner

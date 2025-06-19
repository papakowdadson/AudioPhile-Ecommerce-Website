import React from 'react'
import ImageBestGear from '../../assets/shared/desktop/image-best-gear.jpg'

const VisionSection = () => {
  return (
    <div className='flex justify-between gap-8 items-center'>
      <div className='flex-1 space-y-4 font-bold max-w-[445px]'>
          <h1 className='text-h2'>
            BRINGING YOU THE <span className='text-primary_orange' >BEST</span>  AUDIO GEAR
          </h1>
          <p className='text-body font-medium text-secondary_black_50' >
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>
      </div>
      <div className='rounded-lg w-[500px] h-[445px] bg-center bg-cover bg-no-repeat' 
        style={{backgroundImage:`url(${ImageBestGear})`}} >
      </div>
      
      
    </div>
  )
}

export default VisionSection

import React from 'react'
import ZX9 from  '../../assets/home/desktop/image-speaker-zx9.png'
import ZX7 from '../../assets/home/desktop/image-speaker-zx7.jpg'
import YX1 from '../../assets/home/desktop/image-earphones-yx1.jpg'
import patternCircles from '../../assets/home/desktop/pattern-circles.svg';
import SecondaryButton from '../../components/SecondaryButton';
import { useNavigate } from 'react-router-dom';

const TrendingProductsSection = () => {
  const navigate = useNavigate()
  const handleSeeProduct = (slug)=>{
        navigate(`/products/productdetails/${slug}`)
  }

    return (
    <div className='space-y-12'>
        <div className=' text-tertiary_white pt-16 px-16 bg-primary_orange rounded-lg bg-left bg-contain bg-no-repeat flex justify-between gap-8'
            style={{ backgroundImage: `url(${patternCircles})` }} >
            <img src={ZX9} className='h-96' alt='zx9Speaker'/>
            <div className='max-w-xs space-y-4 '>
                <h1 className='text-h1' >
                    ZX9 SPEAKER
                </h1>
                <p>
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>
                <SecondaryButton label={"See Product"} onClick={()=>handleSeeProduct('zx9-speaker')}/>

            </div>

        </div>
        <div className='p-16 bg-tertiary_grey rounded-lg h-72 flex items-center'
            style={{ backgroundImage: `url(${ZX7})` }}>
            <div className='text-secondary_black space-y-4'>
                <h1 className='text-h4'>
                    ZX7 SPEAKER
                </h1> 
                <SecondaryButton label={"See Product"} onClick={()=>handleSeeProduct("zx7-speaker")}/>

            </div>

        </div>
        <div className='flex gap-8 h-72'>
            <img src={YX1} alt='zx9Speaker' className='rounded-lg'/>
            <div className='bg-tertiary_grey p-16 rounded-lg flex-col flex  text-secondary_black space-y-4 w-full justify-center'>
                <h1 className='text-h4'>
                    YX1 EARPHONES
                </h1>
                <SecondaryButton label={"See Product"} onClick={()=>handleSeeProduct("yx1-earphones")}/>

            </div>

        </div>
      
    </div>
  )
}

export default TrendingProductsSection

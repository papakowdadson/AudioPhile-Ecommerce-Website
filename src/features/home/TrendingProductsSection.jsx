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
        <div className=' text-tertiary_white pt-16 px-16 bg-primary_orange rounded-lg bg-left bg-contain max-md:bg-center bg-no-repeat flex justify-between gap-8 max-md:flex-col max-md:items-center max-md:pb-16'
            style={{ backgroundImage: `url(${patternCircles})` }} >
            <img src={ZX9} className='h-96 max-md:w-64 max-md:h-64' alt='zx9Speaker'/>
            <div className='max-w-xs space-y-4 max-md:flex-col max-md:text-center max-md:items-center max-md:flex max-md:max-w-full'>
                <h1 className='text-h1' >
                    <span>ZX9 </span>
                    <br/>
                    <span>SPEAKER</span>
                    
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
                <h1 className='text-h4 font-bold'>
                    ZX7 SPEAKER
                </h1> 
                <SecondaryButton label={"See Product"} onClick={()=>handleSeeProduct("zx7-speaker")}/>

            </div>

        </div>
        <div className='flex gap-8 h-72 max-sm:h-fit max-sm:flex-col' >
            <div className='w-full h-full max-sm:h-72 rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat' 
            style={{ backgroundImage: `url(${YX1})` }}> 
                {/* <img src={YX1} alt='zx9Speaker' className='h-full  max-sm:w-full'/> */}
            </div>
            <div className='bg-tertiary_grey p-16 rounded-lg flex-col flex  text-secondary_black space-y-4 w-full justify-center'>
                <h1 className='text-h4 font-bold'>
                    YX1 EARPHONES
                </h1>
                <SecondaryButton label={"See Product"} onClick={()=>handleSeeProduct("yx1-earphones")}/>
            </div>

        </div>
      
    </div>
  )
}

export default TrendingProductsSection

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
        <div className=' flex justify-between max-md:justify-center pl-2 pr-2 items-center gap-8 h-[calc(100svh-73px)] max-md:flex-col border-t-tertiary_grey border-t-2 overflow-clip'>
            <div className='space-y-6 text-tertiary_grey flex-1 max-md:absolute max-md:my-auto max-md:flex-col max-md:flex max-md:items-center'>
                <p className='text-overline tracking-widest opacity-50' >NEW PRODUCT</p>
                <h1 className='text-h1 max-sm:text-[36px] max-sm:font-bold max-sm:leading-tight' >
                  <span>XX99 Mark II</span>
                  <br/>
                  <span>Headphones</span> 
                </h1>
                <p className='text-body text-ellipsis max-md:text-center max-md:w-3/4 max-md:max-h-[calc(100svh-400px)] opacity-75' >
                    Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                </p>
                <PrimaryButton isFullWidth={false} label={'See Products'} onClick={()=>handleSeeProduct('xx99-mark-two-headphones')} />

            </div>
            <div className='flex-2'>
                <img 
                    src={imageHero} 
                    alt='XX99 Mark II Headphones' 
                    className='w-full object-cover  max-md:object-contain max-md:h-[calc(100svh-80px)] md:h-[87svh] '
                />

            </div>
        </div>
        
      </ScreenCap>
    </div>
  )
}

export default Banner

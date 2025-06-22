import ScreenCap from '../../layout/ScreenCap'
import SocailsSection from '../SocailsSection'
import { NavBarData } from '../../data/NavBarData'
import logo from '../../assets/shared/desktop/logo.svg'
import { NavLink,useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation()
  
  return (
    <div className='bg-secondary_black pb-8 relative max-lg:px-4'>
      <ScreenCap>
        <div className='w-[101px] bg-primary_orange h-[4px] mb-12 max-sm:mx-auto'>
        </div>
        <div className='flex justify-between items-center mb-12 text-tertiary_white max-sm:flex-col max-sm:gap-12'>
            <NavLink to={'/'}>
                  <img src={logo} alt='logo' className=''/>
            </NavLink>
            <div className='flex gap-8 max-sm:flex-col'>
              {NavBarData.map((item, index) => (
                <NavLink 
                  to={item.path}
                  key={index}
                  className={() =>location.pathname + location.search + location.hash === item.path
                  ?'text-primary_orange text-subtitle font-bold font-heading text-center':'text-subtitle font-heading text-tertiary_white hover:text-primary_orange transition-colors duration-300 font-bold text-center'}
                >
                  {item.name.toLocaleUpperCase()}
                </NavLink>
              ))}

            </div>         
        </div>
        <div className='flex justify-between gap-8 mb-12 max-sm:flex-col max-sm:items-center items-end'>
          <div>
            <p className='text-tertiary_white font-medium text-body max-w-md opacity-50 max-sm:text-center'>
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          
          <SocailsSection/>
        </div>
        <p className='text-tertiary_white font-medium text-body opacity-50 max-md:text-center' >Copyright 2021. All Rights Reserved</p>
      </ScreenCap>
      
    </div>
  )
}

export default Footer

import React, { useContext,useState } from 'react'
import ScreenCap from '../../layout/ScreenCap'
import { NavLink, useLocation } from 'react-router-dom'
import { NavBarData } from '../../data/NavBarData'
import logo from '../../assets/shared/desktop/logo.svg'
import cartIcon from '../../assets/shared/desktop/icon-cart.svg'
import { CartContext } from '../../context/cartContext'
import CartModal from '../../features/cart/CartModal'
import hamburgerIcon from '../../assets/shared/tablet/icon-hamburger.svg'
import MenuModal from './MenuModal'
import { CustomLogger } from '../../utils/customLogger'

const NavBar = () => {
  const location = useLocation()
  const cartContext = useContext(CartContext)
  const { getItemsCount } = cartContext
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isDrawed,setIsDrawed] = useState(false)
  const handleShowCartModal=()=>{
    isDrawed&&handleDrawer()
    setIsCartOpen((prev)=>!prev)
  }
  const handleDrawer = ()=>{
      CustomLogger('=====handling drawer=======',isDrawed)
      isCartOpen&&handleShowCartModal()
      setIsDrawed((prev)=>!prev)
  }


  return (
    <div className='bg-secondary_black text-white py-6 fixed w-full z-10'>
      <ScreenCap>
        <div className='flex gap-4 max-sm:justify-between max-md:justify-normal justify-between items-center text-tertiary_white max-lg:px-4 '>
          <div className='hidden max-md:block' onClick={handleDrawer}>
              <img src={hamburgerIcon} alt='humburger' />
          </div>
            <NavLink to={'/'} className='max-sm:m-auto max-md:mr-auto'>
              <img src={logo} alt='logo' className='' />
          </NavLink>
          
          <div className='flex gap-8 max-md:hidden'>
            {NavBarData.map((item, index) => (
              <NavLink 
                to={item.path}
                key={index}
                className={() =>location.pathname + location.search + location.hash === item.path
                ?'text-primary_orange text-subtitle font-bold font-heading':'text-subtitle font-heading text-tertiary_white hover:text-primary_orange transition-colors duration-300 font-bold'}
              >
                {item.name.toLocaleUpperCase()}
              </NavLink>
            ))}

          </div>
          {/* no need for custom icon button here as was not in the design system */}
          <div className='relative' onClick={handleShowCartModal}>
            <span className='absolute -top-2 -right-2 bg-primary_orange text-secondary_black rounded-full w-5 h-5 flex items-center justify-center text-overline font-bold'>{getItemsCount()}</span>
            <img 
              src={cartIcon} 
              alt='cart icon' 
              className=' cursor-pointer hover:opacity-80 transition-opacity duration-300'
            />
          </div>
                  
        </div>
      </ScreenCap>
      {isCartOpen && <CartModal handleShowCartModal={handleShowCartModal} />}
      {isDrawed&&<MenuModal handleCloseModal={handleDrawer}/>}
    </div>
   
  )
}

export default NavBar

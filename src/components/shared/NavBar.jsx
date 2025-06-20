import React, { useContext,useState } from 'react'
import ScreenCap from '../../layout/ScreenCap'
import { NavLink, useLocation } from 'react-router-dom'
import { NavBarData } from '../../data/NavBarData'
import logo from '../../assets/shared/desktop/logo.svg'
import cartIcon from '../../assets/shared/desktop/icon-cart.svg'
import { CartContext } from '../../context/cartContext'
import CartModal from '../../features/cart/CartModal'

const NavBar = () => {
  const location = useLocation()
  const cartContext = useContext(CartContext)
  const { getItemsCount } = cartContext
  const [isCartOpen, setIsCartOpen] = useState(false)
  const handleCartClick=()=>{
    setIsCartOpen(!isCartOpen)
  }


  return (
    <div className='bg-secondary_black text-white py-6'>
      <ScreenCap>
        <div className='flex justify-between items-center mb-6 text-tertiary_white max-lg:px-4 '>
          <NavLink to={'/'}>
              <img src={logo} alt='logo' className='' />
          </NavLink>
          <div className='flex gap-8'>
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
          <div className='relative' onClick={handleCartClick}>
            <span className='absolute -top-2 -right-2 bg-primary_orange text-secondary_black rounded-full w-5 h-5 flex items-center justify-center text-overline font-bold'>{getItemsCount()}</span>
            <img 
              src={cartIcon} 
              alt='cart icon' 
              className=' cursor-pointer hover:opacity-80 transition-opacity duration-300'
            />
          </div>
                  
        </div>
        <hr className='border-tertiary_grey_outline' />
      </ScreenCap>
      {isCartOpen && <CartModal onClick={handleCartClick} />}
    </div>
   
  )
}

export default NavBar

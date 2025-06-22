import React,{useContext} from 'react'
import ScreenCap from '../../layout/ScreenCap'
import { CartContext } from '../../context/cartContext'
import PrimaryButton from '../../components/primaryButton'
import { useNavigate } from 'react-router-dom'
import CartItem from './components/CartItem'

const CartModal = ({onClick}) => {
    const cartContext = useContext(CartContext)
    const {items,getItemsCount,addItemToCart,getTotalPrice,removeItem,removeAllItems} = cartContext
    const navigate = useNavigate()

    const HandleNavigateToCheckout = ()=>{
        if(getItemsCount()>0){
            onClick()
            navigate('/checkout')
        }
      

    }

    return (
    <div className='fixed top-[0px] w-full h-full bg-black bg-opacity-50 flex items-start justify-center z-50' onClick={onClick} >
        <ScreenCap> 
            <div className='flex justify-end place-items-end pt-[73px] md:min-w-[768px] lg:min-w-[1024px] max-lg:px-4'>
                <div className='bg-white p-6 rounded-lg shadow-lg w-96 space-y-4' onClick={e => e.stopPropagation()}>
                    <div className='flex justify-between'>
                            <h2 className='text-secondary_black text-h6 font-bold mb-4'>{`Your Cart (${getItemsCount()})`}</h2>
                            <p className='text-body font-medium text-secondary_black_50 cursor-pointer' onClick={()=>removeAllItems()}>Remove all</p>
                            
                    </div>
                    <div className='space-y-4 max-h-[300px] overflow-y-auto'>
                        {items.map((item,index)=> <CartItem key={index} item={item} handleDecrement={removeItem} handleIncrement={addItemToCart} />)}
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-body font-medium text-secondary_black_50'>Total</p>
                        <p className='text-secondary_black text-h6 font-bold'>{`$ ${getTotalPrice()}`}</p>
                    </div>
                    <PrimaryButton isFullWidth={true} label={'Checkout'} onClick={HandleNavigateToCheckout}/>
                </div>
            </div>                   
        </ScreenCap>
    </div>
  )
}

export default CartModal

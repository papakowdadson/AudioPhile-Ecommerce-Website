import React from 'react'
import { useNavigate } from 'react-router-dom'
import ScreenCap from '../../layout/ScreenCap'
import PrimaryButton from '../../components/primaryButton'
import CheckoutItem from './component/CheckoutItem'
import { formatMoney } from '../../utils/formatMoney'
import confirmIcon from "../../assets/checkout/icon-order-confirmation.svg"

const CheckoutModal = ({items, grandTotal}) => {
    const navigate = useNavigate()

    const HandleNavigateToCheckout = ()=>{
        navigate('/')
    }

    return (
    <div className='fixed top-[96px] w-full h-full bg-black bg-opacity-50 flex items-start justify-center z-50'>
            <div className='mt-10 bg-white max-w-[540px] rounded-lg shadow-lg p-6 space-y-4 max-h-[500px] overflow-y-auto'>
                <img src={confirmIcon} alt='done icon'/>
                <p className='text-secondary_black font-bold text-h3 ' >THANK YOU <br></br> FOR YOUR ORDER</p>
                <p className='text-body text-secondary_black_50'>You will receive an email confirmation shortly.</p>
                <div className='rounded-lg flex gap-2 bg-tertiary_grey overflow-hidden'>
                    <div className=' flex-1'>
                             {items.map((item,index)=> <CheckoutItem key={index} item={item}/>)}
                    </div>
                    <div className='bg-secondary_black p-4'>
                     <p className='text-body text-tertiary_white opacity-50 font-medium' >GRAND TOTAL</p>
                     <p className='font-bold text-h6 text-white' >{formatMoney(grandTotal())}</p>
                    </div>
                   
                  
                </div>                    
                <PrimaryButton isFullWidth={true} label={'BACK TO HOME'} onClick={HandleNavigateToCheckout}/>

            </div>                   
    </div>
  )
}

export default CheckoutModal

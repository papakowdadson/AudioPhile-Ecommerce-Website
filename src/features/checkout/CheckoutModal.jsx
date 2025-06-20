import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import ScreenCap from '../../layout/ScreenCap'
import PrimaryButton from '../../components/primaryButton'
import CheckoutItem from './component/CheckoutItem'
import { formatMoney } from '../../utils/formatMoney'
import confirmIcon from "../../assets/checkout/icon-order-confirmation.svg"
import TertiaryButton from '../../components/TertiaryButton'

const CheckoutModal = ({items, grandTotal,removeAllItems}) => {
    const navigate = useNavigate()
    const [showAll,setShowAll] = useState(false);
    const handleShowAll=()=>{
        setShowAll((prev)=>!prev)
    }

    const HandleNavigateToCheckout = ()=>{
        navigate('/')
        removeAllItems()
    }

    return (
    <div className='fixed top-[0px] w-full h-svh bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='mt-10 bg-white max-w-[540px] rounded-lg shadow-lg p-6 space-y-4 '>
                <img src={confirmIcon} alt='done icon' className='h-16 w-16' />
                <p className='text-secondary_black font-bold text-h3 ' >THANK YOU <br></br> FOR YOUR ORDER</p>
                <p className='text-body text-secondary_black_50'>You will receive an email confirmation shortly.</p>
                <div className='rounded-lg flex max-sm:flex-col bg-tertiary_grey overflow-hidden'>
                    <div className='flex-1 max-h-[200px] overflow-y-auto space-y-2 p-4'>
                             {(showAll?items:items.slice(0,1)).map((item,index)=> <CheckoutItem key={index} item={item}/>)}
                             <hr/>
                             <TertiaryButton isFullWidth={true} label={showAll?'Show more':`and ${items.length-1} other items(s)`} onClick={handleShowAll} />
                    </div>
                    <div className='bg-secondary_black p-4 flex justify-end flex-col'>
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

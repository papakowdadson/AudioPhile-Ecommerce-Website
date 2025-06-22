import { useState,useEffect, useContext } from 'react'
import PrimaryButton from '../../../components/primaryButton'
import CartCounterButton from '../../cart/components/CartCounterButton'
import { CartContext } from '../../../context/cartContext'
import { CustomLogger } from '../../../utils/customLogger'

const DetailProduct = ({product}) => {
    const cartContext = useContext(CartContext)
    const {addItemToCart} = cartContext
    const [potentialPurchase,setPotentialPurchase] = useState([])
    
    useEffect(()=>{
        CustomLogger("===passed current potential===",product)
        setPotentialPurchase(()=>[product])
        CustomLogger("===after current potential===",potentialPurchase)

    },[product])
    
   
    const handleAddToCartClick=()=>{
        potentialPurchase.map((item,index)=>addItemToCart(item.id,item))

    }
    const handleDecrement=()=>{
        if(potentialPurchase.length>1){
            setPotentialPurchase((prev)=>{
               const newData = [...prev]
               newData.pop()
               return newData
            })
        }
    }
    const handleIncrement=()=>{
        setPotentialPurchase((prev)=>{
            const newData = [...prev]
            newData.push(product)
            return newData
        })
    }

  return (
    <div className={`flex justify-between items-center gap-8 max-sm:flex-col h-fit `} >
        <div className='bg-tertiary_grey rounded-lg p-8 h-full max-sm:w-full max-md:min-w-[281px] lg:w-[540px] '>
            <img src={product.image.desktop} alt={product.name} className=' max-sm:my-0 max-md:my-20'/>
        </div>
        <div className='space-y-6 max-w-[445px] max-sm:flex-col max-sm:max-w-full' >
            {product.new&&<p className='text-primary_orange tracking-widest'>NEW PRODUCT</p>}
            <h1 className='text-h1 max-md:text-h4' >
                <span>{product.name.split(' ').slice(0,-1).join(" ")}</span>
                <br/>
                <span>{product.name.split(' ').at(-1)}</span>
            </h1>
            <p className='text-body font-medium text-secondary_black_50'>{product.description}</p>
            <p className='text-h6 font-bold'>{`$ ${product.price}`}</p>
            <div className='gap-4 flex'>
                <CartCounterButton label={potentialPurchase.length} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
                <PrimaryButton isFullWidth={false} label={'ADD TO CART'} onClick={()=>handleAddToCartClick(product)} />
            </div>
        </div>
      
    </div>
  )
}

export default DetailProduct

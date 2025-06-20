import { useState,useEffect, useContext } from 'react'
import PrimaryButton from '../../../components/primaryButton'
import CartCounterButton from '../../cart/components/CartCounterButton'
import { CartContext } from '../../../context/cartContext'

const DetailProduct = ({product}) => {
    const cartContext = useContext(CartContext)
    const {addItemToCart} = cartContext
    const [potentialPurchase,setPotentialPurchase] = useState([])
    
    useEffect(()=>{
        setPotentialPurchase([product])

    },[])
    
   
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
    <div className={`flex justify-between items-center gap-8 max-sm:flex-col`} >
        <div className='bg-tertiary_grey rounded-lg p-8 sm:w-full md:w-[281px] lg:w-[540px]'>
            <img src={product.image.desktop} alt={product.name}/>
        </div>
        <div className='space-y-6 max-w-[445px] max-sm:flex-col max-sm:max-w-full' >
            {product.new&&<p className='text-primary_orange'>New Product</p>}
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

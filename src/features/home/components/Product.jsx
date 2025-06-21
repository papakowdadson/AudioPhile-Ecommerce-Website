import React from 'react'
import TertiaryButton from '../../../components/TertiaryButton'
import { useNavigate } from 'react-router-dom'

const Product = ({image,name,pathName,path,handleCloseModal}) => {
    const navigate = useNavigate()
    const handleProductClick = () =>{
        navigate(path)
        handleCloseModal&&handleCloseModal()
    }

  return (
    <div className='relative flex-1 sm:max-w-80 max-sm:w-full'>
        <img src={image} alt={name} className=' h-[146px] absolute left-1/2 top-4 -translate-x-1/2 ' />
        <div className='mt-16 flex justify-end items-center flex-col gap-6 bg-tertiary_grey h-[204px] rounded-lg p-4'>
            <h2 className='font-bold text-body text-secondary_black'>{name}</h2>
            <TertiaryButton hasIcon={true} onClick={handleProductClick} label={pathName} />
        </div>
      
    </div>
  )
}

export default Product

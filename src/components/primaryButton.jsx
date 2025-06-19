import React from 'react'

const PrimaryButton = ({onClick,label}) => {
  return (
    <div onClick={onClick} className='bg-primary_orange text-tertiary_white px-4 py-2 rounded-sm cursor-pointer hover:bg-primary_orange_hovered transition-colors duration-300 w-fit'>
      {label.toUpperCase()}
    </div>
  )
}

export default PrimaryButton

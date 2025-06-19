import React from 'react'

function SecondaryButton({label, onClick}) {
  return (
    <div onClick={onClick} className='px-4 py-2 transition-colors duration-300 cursor-pointer w-fit border rounded-sm border-secondary_black text-secondary_black hover:text-tertiary_white hover:bg-secondary_black'>
        <p className='text-subtitle font-bold' > {label.toUpperCase()} </p>
      
    </div>
  )
}

export default SecondaryButton

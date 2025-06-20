import React from 'react'

const PrimaryButton = ({onClick,label,isFullWidth}) => {
  return (
    <button type="button" onClick={onClick} className={`bg-primary_orange text-tertiary_white px-4 text-center py-2 rounded-sm cursor-pointer hover:bg-primary_orange_hovered transition-colors duration-300 ${isFullWidth?'w-full':'w-fit'}`}>
      {label.toUpperCase()}
    </button>
  )
}

export default PrimaryButton

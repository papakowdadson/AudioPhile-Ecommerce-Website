import React from 'react'
import ArrowRightIcon from '../assets/shared/desktop/icon-arrow-right.svg'

const TertiaryButton = ({onClick,label,hasIcon,isUpperCase,isFullWidth}) => {
  return (
    <div onClick={()=>onClick()} className={`text-subtitle font-bold text-gray-400 px-4 py-2 rounded-sm cursor-pointer hover:text-primary_orange transition-colors duration-300 w-fit flex items-center justify-center gap-4 ${isFullWidth?'w-full':'w-fit'}`}>
      <p>
          {isUpperCase?label.toUpperCase():label}
      </p>
      {hasIcon&&<img src={ArrowRightIcon} alt='arrow right' className='inline-block w-[5px] h-[10px]' />}
    </div>
  )
}

export default TertiaryButton

import React from 'react'
import ScreenCap from '../layout/ScreenCap'

function CatergoryBanner({categoryName}) {
  return (
    <div className='bg-secondary_black '>
        <ScreenCap>
            <h1 className='py-12 text-h2 font-bold text-tertiary_white text-center border-t-tertiary_grey border-t-2'>
                {categoryName.toUpperCase()}
            </h1>
        </ScreenCap>
    </div>
  )
}

export default CatergoryBanner

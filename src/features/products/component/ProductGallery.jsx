import React from 'react'

const ProductGallery = ({gallery}) => {
  return (
    <div className='flex gap-8 max-sm:flex-col'>
      <div className='space-y-8 flex-1'>
        <div className='h-[280px] flex-1 rounded-lg bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${gallery.first.desktop})` }}>

        </div>
        <div className='h-[280px] flex-1 rounded-lg bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${gallery.second.desktop})` }}>

        </div>
      </div>
      <div className='flex-1 rounded-lg bg-cover bg-center bg-no-repeat max-sm:h-[327px] max-sm:flex-none' style={{ backgroundImage: `url(${gallery.third.desktop})` }}>

      </div>
    </div>
  )
}

export default ProductGallery

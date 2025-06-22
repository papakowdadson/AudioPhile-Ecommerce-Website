import React from 'react'

const InputTextArea = ({name,placeholder,id,field,onChange,label,hasError,errorMessage}) => {
  return (
    <div className='space-y-2 flex-col flex w-full '>
      <div className='flex justify-between items-center gap-4'>
          <label htmlFor={id} className={`whitespace-nowrap flex-1 text-ellipsis text-caption font-bold ${hasError?'text-red-500':'text-secondary_black'}`}>{label}</label>
          {hasError&&<p className='flex-1 text-ellipsis text-caption font-bold text-red-500 text-right truncate overflow-hidden whitespace-nowrap' >{errorMessage}</p>}
      </div>
      <input name={name} className={`focus:outline-none p-2 ${hasError?'border-red-500':'border-tertiary_grey'} border-2 rounded-lg hover:border-primary_orange focus:border-primary_orange`} type='text' onChange={(e)=>onChange(e)} placeholder={placeholder} id={id} value={field} />
    </div>
  )
}

export default InputTextArea

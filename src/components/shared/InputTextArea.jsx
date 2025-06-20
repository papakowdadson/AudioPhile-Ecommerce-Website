import React from 'react'

const InputTextArea = ({placeholder,id,field,onChange,label}) => {
  return (
    <div className='space-y-2 flex-col flex min-w-[288px]'>
      <label htmlFor={id} className='text-caption font-bold text-secondary_black'>{label}</label>
      <input className='p-2 active:border-primary_orange border-tertiary_grey border rounded-lg' type='text' onChange={(e)=>onChange(e)} placeholder={placeholder} id={id} value={field} />
    </div>
  )
}

export default InputTextArea

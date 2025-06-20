import React from 'react'

const InputRadioTextArea = ({placeholder,id,field,onChange,checkedValue}) => {
  return (
    <div>
      <input className='border-tertiary_grey p-2 active:border-primary_orange' type='radio' onChange={onChange} id={id} value={checkedValue} checked={field==checkedValue}/>
      <label htmlFor={id} className="ml-2">{placeholder}</label>
    </div>
  )
}

export default InputRadioTextArea

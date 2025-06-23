import React from 'react'

const InputRadioTextArea = ({placeholder,id,field,onChange,checkedValue,name}) => {
  return (
    <div className={`border ${(field===checkedValue)?'border-primary_orange':'border-tertiary_grey'}  p-2 w-full rounded-lg hover:border-primary_orange transition-colors duration-300 space-x-2 border-2 `}>
      <input className='cursor-pointer accent-primary_orange checked:border-primary_orange checked:bg-primary_orange  active:border-primary_orange ' type='radio' name={name} onChange={onChange} id={id} value={checkedValue} checked={field===checkedValue}/>
      <label htmlFor={id} className="text-body font-bold cursor-pointer">{placeholder}</label>
    </div>
  )
}

export default InputRadioTextArea

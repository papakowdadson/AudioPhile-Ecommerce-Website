import React from 'react'
import InputTextArea from '../../components/shared/InputTextArea'
import InputRadioTextArea from '../../components/shared/InputRadioTextArea'
import cashDeliveryIcon from "../../assets/checkout/icon-cash-on-delivery.svg"

const CheckoutForm = ({formDataError,formData,handleFormData}) => {
  const {
      name,
      email,
      contact,
      address,
      zipcode,
      city,
      country,
      paymentMethod,
      emoneyNumber,
      emoneyPIN} = formData
  const {
      nameError,
      emailError,
      contactError,
      addressError,
      zipcodeError,
      cityError,
      countryError,
      paymentMethodError,
      emoneyNumberError,
      emoneyPINError
  } = formDataError
  return (
    <div className="bg-white rounded-lg flex-1 p-8 space-y-10">
              <p className="font-bold mb-2 text-secondary_black text-h3">CHECKOUT</p>
              <form className='space-y-10'>
                <div className='space-y-4'>
                  <p className='text-primary_orange text-subtitle font-bold'>BILLING DETAILS</p>
                  <div className='flex gap-4 flex-wrap'>
                    <InputTextArea placeholder={'Papa Kow Dadson'} name={"name"} id={"name"} hasError={nameError.length>0} errorMessage={nameError} field={name} onChange={handleFormData} label={"Name"} />
                    <InputTextArea placeholder={'PapaKowDadson@gmail.com'} name={"email"} id={"email"} hasError={emailError.lenght>0} errorMessage={emailError} field={email} onChange={handleFormData} label={"Email Address"}  />
                    <InputTextArea placeholder={'+233200032276'} name={"contact"} id={"contact"} hasError={contactError.lenght>0} errorMessage={contactError} field={contact} onChange={handleFormData} label={"Phone Number"}   />
                  </div>
                </div>
                <div className='space-y-4'>
                  <p className='text-primary_orange text-subtitle font-bold'>SHIPPING INFO</p>
                  <InputTextArea placeholder={'1137 Williams Avenue'} name={"address"} id={"address"} hasError={addressError.length>0} errorMessage={addressError} field={address} onChange={handleFormData} label={"Address"} />
                  <div className='flex gap-4 flex-wrap'>
                    <InputTextArea placeholder={'1137'} name={"zipcode"} id={"zipcode"} hasError={zipcodeError.length>0} errorMessage={zipcodeError} field={zipcode} onChange={handleFormData} label={"ZIP Code"} />
                    <InputTextArea placeholder={'Accra'} name={"city"} id={"city"} hasError={cityError.lenght>0} errorMessage={cityError} field={city} onChange={handleFormData} label={"City"} />
                    <InputTextArea placeholder={'Ghana'} name={"country"} id={"country"} hasError={countryError.lenght>0} errorMessage={countryError} field={country} onChange={handleFormData} label={"Country"} />
                  </div>
                </div>
                <div className='space-y-4'>
                  <p className='text-primary_orange text-subtitle font-bold'>PAYMENT DETAILS</p>
                  <div className='flex gap-8 justify-between'>
                    <p className='text-caption font-bold'>Payment Method</p>
                    <div className='space-y-4'>
                    {paymentMethodError.length>0&& <p className='text-caption font-bold text-red-500' >{paymentMethodError}</p> }
                      <InputRadioTextArea name={"paymentMethod"} placeholder={"e-Money"} id={"paymentMethodeMoney"} field={paymentMethod} onChange={handleFormData} checkedValue={"e-Money"}/>
                      <InputRadioTextArea name={"paymentMethod"} placeholder={"Cash on Delivery"} id={"paymentMethodCash"} field={paymentMethod} onChange={handleFormData} checkedValue={"Cash on Delivery"} />
                    </div>
                    
                  </div>
                  {paymentMethod=="e-Money"?
                    <div className='flex gap-4'>
                      <InputTextArea hasError={emoneyNumberError.length>0} errorMessage={emoneyNumberError} placeholder={'233200032276'} id={"emoneyNumber"} name={"emoneyNumber"} field={emoneyNumber} onChange={handleFormData} label={"e-Money Number"}/>
                      <InputTextArea hasError={emoneyPINError.length>0} errorMessage={emoneyPINError} placeholder={'6912'} id={"emoneyPIN"} name={"emoneyPIN"} field={emoneyPIN} onChange={handleFormData} label={"e-Money PIN"}/>
                    </div>:
                    <div className='flex gap-4 items-center'>
                      <img src={cashDeliveryIcon} alt='cash icon'/>
                      <p className='text-body font-medium text-secondary_black_50' >The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>

                    </div>
                  }
                  
                </div>
            </form>
    </div>
      
  )
}

export default CheckoutForm

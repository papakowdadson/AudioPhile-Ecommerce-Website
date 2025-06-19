import React from 'react'

const CheckoutForm = ({formData,handleFormData}) => {
  return (
    <div className="bg-white rounded-lg flex-1 p-10 space-y-12">
              <p className="font-bold mb-2 text-secondary_black">CHECKOUT</p>
              <form>
                <div>
                  <p className='text-primary_orange text-subtitle font-bold'>BILLING DETAILS</p>
                </div>
                <div>
                  <p className='text-primary_orange text-subtitle font-bold'>SHIPPING INFO</p>
                </div>
                <div>
                  <p className='text-primary_orange text-subtitle font-bold'>PAYMENT DETAILS</p>
                </div>
            </form>
    </div>
      
  )
}

export default CheckoutForm

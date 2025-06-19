import { useState } from "react";
import ScreenCap from "../layout/ScreenCap";
import CheckoutSummary from "../features/checkout/CheckoutSummary";
import CheckoutForm from "../features/checkout/CheckoutForm";

const CheckoutPage = () => {
  const [formData,setFormData] = useState(
    {
      "name":"",
      "email":"",
      "contact":"",
      "address":"",
      "zipcode":"",
      "city":"",
      "country":"",
      "paymentMethod":"",
      "e-moneyNumber":"",
      "e-moneyPIN":""
    });

    const handleFormData = (e)=>{

    }

 
    return (

      <div className="bg-tertiary_grey w-full">
        <ScreenCap>
          <div className="flex gap-8 max-sm:flex-col" >
            <CheckoutForm handleFormData={handleFormData} formData={formData} />
            {/* <CheckoutSummary/> */}
          </div>
          
        </ScreenCap>
        
      </div>
    );
  
};

export default CheckoutPage;

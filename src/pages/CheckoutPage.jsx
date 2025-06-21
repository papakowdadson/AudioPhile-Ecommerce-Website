import { useState,useContext } from "react";
import ScreenCap from "../layout/ScreenCap";
import CheckoutSummary from "../features/checkout/CheckoutSummary";
import CheckoutForm from "../features/checkout/CheckoutForm";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import CheckoutModal from "../features/checkout/CheckoutModal";
import {isNameValid,isEmailValid,isContactValid,isAddressValid,isZipCodeValid,isCityValid,isCountryValid,isPaymentMethodValid,isEmoneyPINValid} from "../utils/middleware"

const CheckoutPage = () => {
    const { 
      removeAllItems, 
      getTotalPrice
      ,items
      ,user
      ,loading
      ,getShippingFee,
      getVAT,
      getGrandTotal} = useContext(CartContext);
    // console.log("======checkout user====",user.userId)
  
  const [isVisible,setIsVisible] = useState(false)
  const [formDataError,setFormDataError] = useState(
    {
      "nameError":"",
      "emailError":"",
      "contactError":"",
      "addressError":"",
      "zipcodeError":"",
      "cityError":"",
      "countryError":"",
      "paymentMethodError":"",
      "emoneyNumberError":"",
      "emoneyPINError":""
    });
  const [formData,setFormData] = useState(
    {
      "name":"",
      "email":"",
      "contact":"",
      "address":"",
      "zipcode":"",
      "city":"",
      "country":"",
      "paymentMethod":"e-Money",
      "emoneyNumber":"",
      "emoneyPIN":""
    });

    const handleFormData = (e)=>{
      console.log('====Setting form data====',e)
      e.preventDefault()
      let {id,value} = e.target
      console.log(id)
      console.log(value)
      setFormData((prev)=>({...prev,[id]:value}))
      handleInputValidation(id,value)
    }
    const handleInputValidation = (id,value) =>{
      const key = id.concat("Error")
      switch (key) {
        case "nameError":
          let nameRes = isNameValid(value)
          setFormDataError((prev)=>({...prev,[key]:nameRes[1]}))
          break;
        case "emailError":
          let emailRes = isEmailValid(value)
          setFormDataError((prev)=>({...prev,[key]:emailRes[1]}))
          break;
        case "contactError":
          let contactRes = isContactValid(value)
          setFormDataError((prev)=>({...prev,[key]:contactRes[1]}))
          break;
        case "addressError":
          let addressRes = isAddressValid(value)
          setFormDataError((prev)=>({...prev,[key]:addressRes[1]}))
          break;
        case "zipcodeError":
          let zipCodeRes = isZipCodeValid(value)
          setFormDataError((prev)=>({...prev,[key]:zipCodeRes[1]}))
          break;
        case "cityError":
          let cityRes = isCityValid(value)
          setFormDataError((prev)=>({...prev,[key]:cityRes[1]}))
          break;
        case "countryError":
          let countryRes = isCountryValid(value)
          setFormDataError((prev)=>({...prev,[key]:countryRes[1]}))
          break;
        case "paymentMethodError":
          let paymentMethodRes = isPaymentMethodValid(value)
          setFormDataError((prev)=>({...prev,[key]:paymentMethodRes[1]}))
          break;
        case "emoneyNumberError":
          let emailemoneyNumberRes = isContactValid(value)
          setFormDataError((prev)=>({...prev,[key]:emailemoneyNumberRes[1]}))
          break;
        case "emoneyPINError":
          let emoneyPINRes = isEmoneyPINValid(value)
          setFormDataError((prev)=>({...prev,[key]:emoneyPINRes[1]}))
          break;
      
        default:
          break;
      }

    }
    const handleIsFormValid=()=>{
      Object.entries(formData).map((key,value)=>handleInputValidation(key,value))
      let combinedErrorString=Object.values(formDataError).join('')
      return combinedErrorString.length>0?false:true 

    }

    
    const handleFormSubmit=(e)=>{
      e.preventDefault()
      console.log('checking out orders...',items)
      let newProductList = items.map((item)=>{
        return {'productId':item.id,'quatity':item.qty,'productName':item.name,'productImageUrl':item.image}
      })
  
      const newData = { 
      "userId":user.userId,
      "products":newProductList,
      "amount":getGrandTotal(),
      "address":`${formData.address} `,
      }
      // TODO: Send new data to a post request api 
      handleShowCheckoutModal()

    }
    const handleShowCheckoutModal=()=>{
      setIsVisible((prev)=>!prev)
      !isVisible&&handleResetForm()

    }
    const handleResetForm =()=>{
      setFormData({
      "name":"",
      "email":"",
      "contact":"",
      "address":"",
      "zipcode":"",
      "city":"",
      "country":"",
      "paymentMethod":"e-Money",
      "emoneyNumber":"",
      "emoneyPIN":""
      })

    }

 
    return (
      <div className="bg-tertiary_grey w-full pt-[96px]">
        <ScreenCap>
          <div className="flex gap-4 max-lg:flex-col max-lg:px-4 py-12" >
            <CheckoutForm formDataError={formDataError} handleFormData={handleFormData} formData={formData} />
            <CheckoutSummary subtotal={getTotalPrice} handleIsFormValid={handleIsFormValid} handleCheckout={handleFormSubmit} loading={loading} shipping={getShippingFee} VAT={getVAT} grandTotal={getGrandTotal} items={items} />
          </div>
        </ScreenCap>
        {isVisible&&<CheckoutModal removeAllItems={removeAllItems} grandTotal={getGrandTotal} items={items} />}
      </div>
    );
  
};

export default CheckoutPage;

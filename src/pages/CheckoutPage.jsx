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
      let {id,value,name} = e.target
      console.log(id)
      console.log(value)
      console.log(name)
      setFormData((prev)=>({...prev,[name]:value}))
      handleInputValidation(name,value)
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
          console.log("===validation country===")
          let countryRes = isCountryValid(value)
          console.log("country res",countryRes)
          setFormDataError((prev)=>({...prev,[key]:countryRes[1]}))
          break;
        case "paymentMethodError":
          let paymentMethodRes = isPaymentMethodValid(value)
          setFormDataError((prev)=>({...prev,[key]:paymentMethodRes[1]}))
          break;
        case "emoneyNumberError":
          let emoneyNumberRes = isContactValid(value)
          setFormDataError((prev)=>({...prev,[key]:emoneyNumberRes[1]}))
          break;
        case "emoneyPINError":
          let emoneyPINRes = isEmoneyPINValid(value)
          setFormDataError((prev)=>({...prev,[key]:emoneyPINRes[1]}))
          break;
      
        default:
          break;
      }

    }
    const handleIsFormValid = () => {
    let isValid = true;
    const newErrors = {};

    Object.entries(formData).forEach(([fieldId, fieldValue]) => {
      const errorKey = `${fieldId}Error`;
      let validationResult;

      switch (fieldId) { 
        case "name":
          validationResult = isNameValid(fieldValue);
          break;
        case "email":
          validationResult = isEmailValid(fieldValue);
          break;
        case "contact":
          validationResult = isContactValid(fieldValue);
          break;
        case "address":
          validationResult = isAddressValid(fieldValue);
          break;
        case "zipcode":
          validationResult = isZipCodeValid(fieldValue);
          break;
        case "city":
          validationResult = isCityValid(fieldValue);
          break;
        case "country":
          validationResult = isCountryValid(fieldValue);
          break;
        case "paymentMethod":
          validationResult = isPaymentMethodValid(fieldValue);
          break;
        case "emoneyNumber":
          validationResult = isContactValid(fieldValue); 
          break;
        case "emoneyPIN":
          validationResult = isEmoneyPINValid(fieldValue);
          break;
        default:
          validationResult = [true, ""]; 
          break;
      }

      if (!validationResult[0]) {
        isValid = false;
      }
      newErrors[errorKey] = validationResult[1];
    });

    setFormDataError((prev)=>({...prev,...newErrors}));

    return isValid;
};

    
    const handleFormSubmit=(e)=>{
      e.preventDefault()
      const formIsValid = handleIsFormValid();

      if (!formIsValid) {
        console.log("Form has validation errors.");
        return;
      }
      else{
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
        handleResetForm()
        handleShowCheckoutModal()
      }
      
     

    }
    const handleShowCheckoutModal=()=>{
      setIsVisible((prev)=>!prev)
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
      setFormDataError({
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
      })

    }

 
    return (
      <div className="bg-tertiary_grey w-full pt-[73px]">
        <ScreenCap>
          <div className="flex gap-4 max-md:flex-col max-lg:px-4 py-12" >
            <CheckoutForm formDataError={formDataError} handleFormData={handleFormData} formData={formData} />
            <CheckoutSummary subtotal={getTotalPrice} handleCheckout={handleFormSubmit} loading={loading} shipping={getShippingFee} VAT={getVAT} grandTotal={getGrandTotal} items={items} />
          </div>
        </ScreenCap>
        {isVisible&&<CheckoutModal removeAllItems={removeAllItems} grandTotal={getGrandTotal} items={items} />}
      </div>
    );
  
};

export default CheckoutPage;

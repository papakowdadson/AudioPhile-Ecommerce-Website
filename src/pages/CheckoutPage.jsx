import { useState,useContext } from "react";
import ScreenCap from "../layout/ScreenCap";
import CheckoutSummary from "../features/checkout/CheckoutSummary";
import CheckoutForm from "../features/checkout/CheckoutForm";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import CheckoutModal from "../features/checkout/CheckoutModal";

const CheckoutPage = () => {
    const navigate = useNavigate();
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
      "Status":"pending"
      }
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
      <div className="bg-tertiary_grey w-full">
        <ScreenCap>
          <div className="flex gap-4 max-lg:flex-col max-lg:px-4 py-12" >
            <CheckoutForm handleFormData={handleFormData} formData={formData} />
            <CheckoutSummary subtotal={getTotalPrice} handleCheckout={handleFormSubmit} loading={loading} shipping={getShippingFee} VAT={getVAT} grandTotal={getGrandTotal} items={items} />
          </div>
        </ScreenCap>
        {isVisible&&<CheckoutModal removeAllItems={removeAllItems} grandTotal={getGrandTotal} items={items} />}
      </div>
    );
  
};

export default CheckoutPage;

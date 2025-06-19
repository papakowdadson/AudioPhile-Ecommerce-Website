import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import PrimaryButton from "../../components/primaryButton";
import CheckoutItem from "./component/CheckoutItem";
import { CartContext } from "../../context/cartContext";


export const CheckoutSummary = () => {
  const navigate = useNavigate();
  const { getTotalPrice,items,user } = useContext(CartContext);
  console.log("======checkout user====",user.userId)

  const handleCheckout = async() => {
    console.log('checking out orders...',items)
    let newProductList = items.map((item)=>{
      return {'productId':item.id,'quatity':item.qty,'productName':item.name,'productImageUrl':item.image}
    })

    const newData = { 
    "userId":user.userId,
    "products":newProductList,
    "amount":getTotalPrice(),
    "address":{"city":"In-house"},
    "Status":"pending"
}

console.log("======checkout item====",newData)

   
  }


  return (
    <div className="bg-white rounded-lg">
              <p>SUMMARY</p>
              <div>
                  {items.map((item, index) => (
                    <CheckoutItem key={index} item={item} />
                  ))}
              </div>
              <div>
                <p>TOTAL</p>
                <p></p>
              </div>
              <div>
                  <p>Shipping</p>
                  <p></p>
              </div>
              <div>
                  <p>VAT(NCLUDED)</p>
                  <p></p>
              </div>
              <div>
                  <p>GRAND TOTAL</p>
                  <p></p>
              </div>
              <PrimaryButton label={"Continue & Pay"} onClick={handleCheckout} />
            </div>
  );
};
export default CheckoutSummary;

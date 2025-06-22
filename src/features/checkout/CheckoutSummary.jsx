import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import PrimaryButton from "../../components/primaryButton";
import CheckoutItem from "./component/CheckoutItem";
import {formatMoney} from "../../utils/formatMoney"

export const CheckoutSummary = ({handleCheckout,items,subtotal,shipping,VAT,grandTotal,loading}) => {

  return (
    <div className="bg-white rounded-lg p-6 space-y-6 h-fit min-w-[350px]">
              <p className="text-h6 font-bold">SUMMARY</p>
              {loading?
                  <div>Loading...</div>:
                  <div className="space-y-2">
                    {items.map((item, index) => (
                      <CheckoutItem key={index} item={item} />
                    ))}
                  </div>
              }

              <div className="space-y-4">
                <div className="flex justify-between" >
                  <p className="font-medium text-body text-secondary_black_50">TOTAL</p>
                  <p className="font-bold text-h6">{`${formatMoney(subtotal())}`}</p>
                </div>
                <div className="flex justify-between" >
                    <p className="font-medium text-body text-secondary_black_50">Shipping</p>
                    <p className="font-bold text-h6">{`${formatMoney(shipping())}`}</p>
                </div>
                <div className="flex justify-between" >
                    <p className="font-medium text-body text-secondary_black_50">VAT (INCLUDED)</p>
                    <p className="font-bold text-h6">{`${formatMoney(VAT())}`}</p>
                </div>
                <div className="flex justify-between" >
                    <p className="font-medium text-body text-secondary_black_50">GRAND TOTAL</p>
                    <p className="font-bold text-h6 text-primary_orange">{`${formatMoney(grandTotal())}`}</p>
                </div>
              </div>
              
              <PrimaryButton isFullWidth={true} label={"Continue & Pay"} onClick={(!loading)?handleCheckout:null} />
            </div>
  );
};
export default CheckoutSummary;

import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { CustomLogger } from "../utils/customLogger";

export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);
  const [loading,setLoading] = useState(true)
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = () => {
      const localUser = JSON.parse(localStorage.getItem("user"));
      const localItems = JSON.parse(localStorage.getItem("items"));
      if (localUser) {
        CustomLogger("=====local user====",localUser);
        setUser(localUser);
      } else {
        const userId = uuidv4();
        CustomLogger("=====userId======",userId);
        const _user = { 'userId': userId };
        localStorage.setItem("user",JSON.stringify(_user));
        setUser({ 'userId': userId });
      }
      if (localItems) {
        CustomLogger("=====local items====",localItems);
        setItems(localItems);
        CustomLogger("=====items====",items);

      } else {
        setItems([]);
      }
      setLoading(false)
    };
    loggedUser();
  }, []);

  const updateLocalItem = (items) =>{
      localStorage.setItem("items",JSON.stringify(items));
  }

  function addItemToCart(id, product) {
    CustomLogger("====adding Item===",product);
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id === id);
      if (!item) {
        const newItems = [
          ...prevItems,
          {
            id,
            qty: 1,
            name: product.name,
            price: product.price,
            image: product.image.desktop,
            totalPrice: product.price,
            slug:product.slug
          },
        ];
        updateLocalItem(newItems)
        return newItems
      } else {
        const newItems = prevItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              qty: item.qty + 1,
              totalPrice: item.totalPrice + product.price,
            };
            
          }
          return item;
        });
        updateLocalItem(newItems);
        return newItems;
      }
    });
  }

  const removeItem = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) => {
          if (item.id === id) {
            return {
              ...item,
              qty: item.qty - 1,
              totalPrice: item.totalPrice - item.price,
            };
          }

          return item;
        })
        .filter((item) => item.qty > 0);

      return updatedItems;
    });
  };

  const removeAllItems =()=>{
    setItems([])
    updateLocalItem([])
  }

  // Function to get the total number of items in the cart
  const getItemsCount = () => {
    let itemcount = items.reduce((sum, item) => sum + item.qty, 0);
    CustomLogger("Total items", itemcount);
    return itemcount;
  };

  // Function to get the total price of items in the cart
  const getTotalPrice = () => {
    let itemTotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
    CustomLogger("Item total price", itemTotal);
    return itemTotal;
  };

  
  const getShippingFee = ()=>{
    const fee = 50;
    return fee;
  }

  const getVAT =()=>{
    const subtotal = getTotalPrice()
    const VAT = 0.2*subtotal;
    return VAT;
  }

  const getGrandTotal = ()=>{
    const grandTotal = getTotalPrice() + getShippingFee() + getVAT()
    return grandTotal
  }

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        getItemsCount,
        addItemToCart,
        removeItem,
        removeAllItems,
        getTotalPrice,
        getShippingFee,
        getVAT,
        getGrandTotal,
        user,
        loading
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

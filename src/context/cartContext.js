import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([
    
  ]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = () => {
      const localUser = JSON.parse(localStorage.getItem("user"));
      if (localUser) {
        console.log("=====local user====",localUser);
        setUser(localUser);
      } else {
        const userId = uuidv4();
        console.log("=====userId======",userId);
        const _user = { 'userId': userId };
        localStorage.setItem("user",JSON.stringify(_user));
        setUser({ 'userId': userId });
      }
    };
    loggedUser();
  }, []);

  function addItemToCart(_id, product) {
    console.log("====adding Item===");
    setItems((prevItems) => {
      const item = prevItems.find((item) => item._id === _id);
      if (!item) {
        return [
          ...prevItems,
          {
            _id,
            qty: 1,
            name: product.name,
            price: product.price,
            image: product.image.desktop,
            totalPrice: product.price,
            slug:product.slug
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item._id === _id) {
            return {
              ...item,
              qty: item.qty + 1,
              totalPrice: item.totalPrice + product.price,
            };
            
          }
          return item;
        });
      }
    });
  }

  const removeItem = (_id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) => {
          if (item._id === _id) {
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

  // Function to get the total number of items in the cart
  const getItemsCount = () => {
    let itemcount = items.reduce((sum, item) => sum + item.qty, 0);
    console.log("Total items", itemcount);
    return itemcount;
  };

  // Function to get the total price of items in the cart
  const getTotalPrice = () => {
    let itemTotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
    console.log("Item total", itemTotal);
    return itemTotal;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        getItemsCount,
        addItemToCart,
        getTotalPrice,
        removeItem,
        user,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

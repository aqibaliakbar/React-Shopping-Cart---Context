// ShopContextProvider.jsx
import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    // Iterate over each item in the cartItems object
    for (const item in cartItems) {
      // Check if the quantity of the item is greater than 0

      if (cartItems[item] > 0) {
        // Find the corresponding product information using the item's ID
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));

        // Calculate the total amount for this item and add it to the overall total
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }

    // Return the total amount for all items in the shopping cart
    return totalAmount;
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

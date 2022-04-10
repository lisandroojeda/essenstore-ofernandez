import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const cartTotal = () => {
    return cart.reduce((acc, prod) => (acc += prod.price * prod.cantidad), 0);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        isInCart,
        cartQuantity,
        cartTotal,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

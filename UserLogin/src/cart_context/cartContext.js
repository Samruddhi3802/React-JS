import { createContext } from "react";

export const cartContext = createContext({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    count:0
})

export const CartContextProvider=cartContext.Provider;

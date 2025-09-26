import React, { createContext, useReducer, useEffect, useState } from "react";

// Initial state
const initialState = {
  cart: [
    { id: 1, name: "Apple", price: 2, quantity: 0 },
    { id: 2, name: "Banana", price: 1, quantity: 0 },
  ]
};


// Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const exists = state.cart.find(item => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      }
    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter(item => item.quantity > 0),
      };
    case "REMOVE_ITEM":
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

// Create context
export const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const amount = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmount(amount);
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export const initialState = {
  cart: [],
  totalAmount: 0,
};

export const cartReducer = (state, action) => {
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
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
 case "INCREMENT":
  return {
    ...state,
    cart: state.cart.map(item =>
      item.id === action.payload
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  };
case "DECREMENT":
  return {
    ...state,
    cart: state.cart.map(item =>
      item.id === action.payload && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  };


    
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

import React, { useContext } from "react";
import { CartContext } from "../components/context/CartContext";

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <li id="cart-items-list">
      <h3>{item.name}</h3>
      <p id={`cart-item-price-${item.id}`}>Price: ${item.price}</p>
      <p id={`cart-amount-${item.id}`}>Quantity: {item.quantity}</p>
      <button
        id={`increment-btn-${item.id}`}
        onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
      >
        +
      </button>
      <button
        id={`decrement-btn-${item.id}`}
        onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
      >
        -
      </button>
      <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;

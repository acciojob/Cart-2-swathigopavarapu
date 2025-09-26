import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Cart = () => {
  const { state, dispatch, totalAmount } = useContext(CartContext);

  if (state.cart.length === 0) return <p>Cart is currently empty</p>;

  return (
    <div>
      <ul id="cart-items-list">
        {state.cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}

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

            <button
              id={`cart-item-remove-${item.id}`}
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <p id="cart-total-amount">Total: ${totalAmount}</p>

      <button id="clear-all-cart" onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;

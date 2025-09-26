import React, { useContext } from "react";
import { CartContext } from "../components/context/CartContext"

const Navbar = () => {
  const { state } = useContext(CartContext);
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav>
      <h1>Shopping Cart</h1>
      <span>useReducer</span>
      <div id="nav-cart-item-count">{totalItems}</div>
    </nav>
  );
};

export default Navbar;

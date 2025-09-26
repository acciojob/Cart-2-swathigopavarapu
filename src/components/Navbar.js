import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Navbar = () => {
  const { state } = useContext(CartContext);
  const totalItems = state.cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav>
      <h1>Shopping Cart</h1>
      <div id="nav-cart-item-count">Items in Cart: {totalItems}</div>
    </nav>
  );
};

export default Navbar;

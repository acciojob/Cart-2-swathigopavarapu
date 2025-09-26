import React, { useContext } from "react";
import { CartProvider, CartContext } from "./context/CartContext";
import Navbar from "./Navbar";
import Cart from "./Cart";

const products = [
  { id: 1, name: "Apple", price: 10 },
  { id: 2, name: "Banana", price: 5 },
  { id: 3, name: "Orange", price: 8 },
];

const AppContent = () => {
  const { dispatch } = useContext(CartContext);

  return (
    <div id="main">
      <Navbar />
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}{" "}
            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <Cart />
    </div>
  );
};

const App = () => (
  <CartProvider>
    <AppContent />
  </CartProvider>
);

export default App;

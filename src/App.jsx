import { useState } from "react";
import Item from "./components/Item";
import OneItem from "./components/OneItem";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";
import cartImg from "./images/cart.png";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const exists = cartItems.find((product) => product.id === item.id);
    if (exists) {
      const newCart = cartItems.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCartItems(newCart);
    } else {
      const newItem = { ...item, quantity: 1 };
      const newCart = [...cartItems, newItem];
      setCartItems(newCart);
    }
  };
  console.log(cartItems);
  return (
    <>
      <nav>
        <Link className="home" to="/">
          Home
        </Link>
        <Link className="cart" to="/cart">
          <img className="cartImg" src={cartImg} alt="Cart" />
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Item />} />
        <Route path="/item/:id" element={<OneItem addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </>
  );
};

export default App;

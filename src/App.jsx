import { useEffectEvent, useState, useEffect } from "react";
import Item from "./components/Item";
import OneItem from "./components/OneItem";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";
import cartImg from "./images/cart.png";

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

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

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );

    setCartItems(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems
      .map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
      .filter((product) => product.quantity > 0);

    setCartItems(updatedCart);
  };

  const deleteAllCart = () => {
    setCartItems([]);
  };

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <nav>
        <Link
          onClick={() => {
            setSearchText("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="home"
          to="/"
        >
          Home
        </Link>
        <input
          className="search"
          type="text"
          placeholder="Hledat..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Link className="cart" to="/cart">
          <img className="cartImg" src={cartImg} alt="Cart" />
          <span className="cartCount">
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Item addToCart={addToCart} searchText={searchText} />}
        />
        <Route path="/item/:id" element={<OneItem addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              deleteAllCart={deleteAllCart}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;

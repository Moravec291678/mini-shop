import "./Cart.css";

const Cart = (props) => {
  const totalPrice = props.cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="cartWrapper">
      {props.cartItems.map((element) => {
        return (
          <div className="product" key={element.id}>
            <img className="elementImage" src={element.image} alt="" />

            <p className="productName">{element.name}</p>

            <p className="quantityPrice">
              {element.quantity * element.price},-
            </p>

            <div className="quantity">
              <button className="minus">-</button>
              <p>{element.quantity}</p>
              <button className="plus">+</button>
            </div>
          </div>
        );
      })}

      <p className="totalPrice">Celkem: {totalPrice},- Kč</p>
    </div>
  );
};

export default Cart;

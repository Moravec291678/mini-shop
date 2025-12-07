import { Link } from "react-router-dom";
import data from "../data/data";
import "./Item.css";

const Item = (props) => {
  return (
    <section className="section">
      {data.map((item) => {
        return (
          <Link to={`/item/${item.id}`} key={item.id}>
            <div className="oneItem">
              <h2 className="itemName">{item.name}</h2>
              <img src={item.image} alt="" className="itemImg" />
              <p className="itemDesc">{item.description}</p>
              <strong className="itemPrice">{item.price},-</strong>
              <button
                className="buyBtn"
                onClick={(e) => {
                  e.preventDefault();
                  props.addToCart(item);
                }}
              >
                Koupit
              </button>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Item;

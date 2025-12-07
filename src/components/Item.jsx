import { Link } from "react-router-dom";
import data from "../data/data";
import "./Item.css";

const Item = () => {
  return (
    <section className="section">
      {data.map((item) => {
        return (
          <Link to={`/item/${item.id}`} key={item.id}>
          <div
            className="oneItem"
            
          >
            <h2 className="itemName">{item.name}</h2>
            <img src={item.image} alt="" className="itemImg" />
            <p className="itemDesc">{item.description}</p>
            <strong className="itemPrice">{item.price},-</strong>
          </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Item;

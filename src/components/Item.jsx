import { Link } from "react-router-dom";
import data from "../data/data";
import "./Item.css";
import { useState } from "react";

const Item = (props) => {
  const [visibleCount, setVisibleCount] = useState(10);
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };
  return (
    <>
      <section className="section">
        {data.slice(0, visibleCount).map((item) => {
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
      {visibleCount < data.length && (
        <div className="loadMoreWrapper">
          <button onClick={loadMore} className="loadMoreBtn">
            Načíst více
          </button>
        </div>
      )}
    </>
  );
};

export default Item;

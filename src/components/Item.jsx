import { Link } from "react-router-dom";
import data from "../data/data";
import "./Item.css";
import { useState } from "react";

const Item = (props) => {
  const { searchText } = props;
  const [visibleCount, setVisibleCount] = useState(12);
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <>
      <section className="section">
        {filteredData.slice(0, visibleCount).map((item) => {
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
      {visibleCount < data.length &&
        (filteredData.length === 0 ? null : (
          <div className="loadMoreWrapper">
            <button onClick={loadMore} className="loadMoreBtn">
              Načíst více
            </button>
          </div>
        ))}
    </>
  );
};

export default Item;

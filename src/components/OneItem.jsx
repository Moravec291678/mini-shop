import { useParams } from "react-router-dom";
import data from "../data/data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OneItem.css";

const OneItem = (props) => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const found = data.find((element) => {
    return element.id === Number(id);
  });

  useEffect(() => {
    setItem(found);
  }, [id]);

  return (
    <div className="oneItemPre">
      <h1>{item.name}</h1>
      <img src={item.image} alt="" className="oneItemImgPre" />
      <p className="oneItemDescPre">{item.description}</p>
      <strong className="oneItemPricePre">{item.price},-</strong>
      <div className="oneItemButtonsPre">
        <Link className="linkBackPre" to="/">
          Zpet
        </Link>
        <button onClick={()=>{props.addToCart(item)}} className="oneItemBtnPre">Koupit</button>
      </div>
    </div>
  );
};

export default OneItem;

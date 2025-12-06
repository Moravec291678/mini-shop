import { useState } from "react";
import data from "./data/data";
const App = () => {
  console.log(data)
  return (
    <>
      {data.map((item) => {
        return (
          <div className="oneItem" key={item.id}>
            <h2>{item.name}</h2>
            <p className="desc">{item.description}</p>
            <strong className="price">{item.price},-</strong>
            <p className="category">{item.category}</p>
          </div>
        );
      })}
    </>
  );
};

export default App;

import "./Categories.css";

const Categories = ({ category, setCategory }) => {
  const categories = [
    "all",
    "shoes",
    "tshirts",
    "hoodies",
    "pants",
    "bags",
    "accessories",
    "jackets",
    "sportswear",
  ];

  return (
    <div className="categories">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`catBtn ${category === cat ? "active" : ""}`}
          onClick={() => setCategory(cat)}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Categories;

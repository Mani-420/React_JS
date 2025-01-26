import "./Product.css";
import Price from "./Price";

function Product({title, idx}) {
    let oldPrice = ["15,000", "150", "5,000", "75,000"];
    let newPrice = ["12,999", "99", "3,999", "59,999"];
    let description= [
      ["Best Controllers", "With Chargers"],
      ["Ultimate Pencils", "With Degital Erasers"],
      ["Best of the best", "With Long Lasting Batteries"],
      ["Amazing laptops", "SSD and 16GB Ram"]
    ]
  return (
    <div className="Product">
        <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default Product;

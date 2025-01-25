import "./Product.css";
import Price from "./Price";

function Product({title, idx}) {
    let oldPrice = ["15,000", "150", "5,000", "75,000"];
    let newPrice = ["12,999", "99", "3,999", "59,999"];
  return (
    <div className="Product">
        <h4>{title}</h4>
        <p>Description</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default Product;

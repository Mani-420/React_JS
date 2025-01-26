import Product from "./Product.jsx";
import "./ProductTab.css";

function ProductTab() {
  return (
    <div className = "productTab">
      <Product title="Gaming Controller" idx = {0} />
      <Product title="Electric Pens" idx = {1}/>
      <Product title="Apple Dots" idx = {2}/>
      <Product title="Laptops" idx = {3}/>
    </div>
  );
}

export default ProductTab;

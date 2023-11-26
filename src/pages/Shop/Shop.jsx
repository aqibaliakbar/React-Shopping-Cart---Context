import "./shop.css";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-title">
        <h1>AQ-ECOMMERCE SHOP</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => {
          return <Product key={product.id} data={product} />;
        })}
      </div>
    </div>
  );
};

export default Shop;

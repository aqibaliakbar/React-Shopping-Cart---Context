import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/ShopContextProvider";
import CartItem from "./CartItem";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import './cart.css'

const Cart = () => {
	const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
	const totalAmount = getTotalCartAmount();
	const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p style={{ textAlign: "center", fontWeight: "600" }}>
            {" "}
            Subtotal: ${totalAmount}{" "}
          </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h2> Your Shopping Cart is Empty</h2>
      )}
    </div>
  );
};
export default Cart;

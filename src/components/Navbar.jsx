import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import logo from "../assets/logo.svg";

import "./Navbar.css";
import { ShopContext } from "../context/ShopContextProvider";

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  const totalItemsInCart = Object.values(cartItems).reduce(
    (total, quantity) => total + quantity,
    0
  );
  return (
    <div className="navbar">
      <img style={{ paddingLeft: "20px" }} src={logo} alt="" />
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
      <p>{totalItemsInCart}</p>
    </div>
  );
};

export default Navbar;

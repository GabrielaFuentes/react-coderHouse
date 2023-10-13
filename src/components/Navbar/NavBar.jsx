import img from "./logo.png";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget"
import SearchProduct from "../SearchProduct/SearchProduct";


import { Link } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <>
      <nav className="nav-container">

        <ul className="nav-ul">
          <img src={img} alt="logo-shop" />
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>

        </ul>
        <div className="nav-rigth" >
          <CartWidget />
          <SearchProduct onSearch={onSearch} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;


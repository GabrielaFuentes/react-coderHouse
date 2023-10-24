import img from "./logo.png";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget"
import SearchProduct from "../SearchProduct/SearchProduct";
import ItemListContainer from "../ItemListContainer/ItemListContainer"


import { Link } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <>
      <nav className="nav-container">

        <ul className="nav-ul">
         <Link to="/"><img src={img} alt="logo-shop" /> </Link> 
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

          <ItemListContainer />
        </div>
      </nav>
    </>
  );
};

export default NavBar;


import img from "./logo.png";
import CartWidget from "../CartWidget/CartWidget"
import SearchProduct from "../SearchProduct/SearchProduct";
import ItemListContainer from "../ItemListContainer/ItemListContainer"


import { Link } from "react-router-dom";

const NavBar = ({ onSearch}) => {
 
 

  return (
    <>
      <nav className="bg-yellow-400">

        <ul className="m-auto py-6 flex justify-between items-center">
         <Link to="/"><img src={img} alt="logo-shop" className="w-28"/> </Link> 
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>

      
        
          <CartWidget />
          <SearchProduct onSearch={onSearch} />

          
          </ul>
      </nav>
       <ItemListContainer />
    </>
  );
};

export default NavBar;


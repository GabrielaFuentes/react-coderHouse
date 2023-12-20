import img from "./logo.png";
import CartWidget from "../CartWidget/CartWidget"




import { Link } from "react-router-dom";

const NavBar = () => {



  return (
    <>
      <nav className="bg-yellow-400">

        <ul className="m-auto py-6 flex justify-around items-center">
          <Link to="/"><img src={img} alt="logo-shop" className="w-28" /> </Link>
          <Link to="/">
            Home
          </Link>
          <Link to="/about">
            About
          </Link>

          <CartWidget />

        </ul>
      </nav>

    </>
  );
};

export default NavBar;


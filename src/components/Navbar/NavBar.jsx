import img from "./logo.png";
import CartWidget from "../CartWidget/CartWidget"
import Button from '@mui/material/Button';
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const NavBar = () => {

  const { user, logout } = useContext(UserContext)

  return (
    <>
      <nav className="bg-yellow-400">
        <ul className="m-auto py-6 flex justify-around items-center">
          <Link to="/"><img src={img} alt="logo-shop" className="w-28" /> </Link>
          <Link to="/" className="text-2xl">
            Home
          </Link>
          <Link to="/contact" className="text-2xl">
            Contacto
          </Link>
          <CartWidget />
        </ul>
        {user.logged && <div className="flex gap-4 items-center container m-auto">
          <p className="text-white">{user.email}</p>
          <Button onClick={logout}>Cerrar sesión</Button>
        </div>}
      </nav>
    </>
  );
};

export default NavBar;


import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Button from '@mui/material/Button';
import trashIcon from "../../assets/trash.svg";
import { Link } from "react-router-dom";
import EmtpyCart from "./EmtpyCart";

const CartView = () => {
  const { cart, totalCart, clearCart, removeItem } = useContext(CartContext);


  if (cart.length === 0) return <EmtpyCart />

  return (
    <section className="container m-auto mt-8">
      <h2 className="text-4xl font-semibold">Tu Compra</h2>
      <hr className=" m-3" />
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="flex gap-3 border-b my-4">
            <img src={item.thumbnail} alt="Product imagen" className="w-32" />
            <div>
              <h3 className="text-2xl">{item.title}</h3>
              <p className="text-2xl font-bold">
                $ {item.price * item.cantidad}
              </p>
              <p>Cantidad: {item.cantidad}</p>
              <Button onClick={() => removeItem(item.id)}>
                <img src={trashIcon} className="w-4" alt="trash icon" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <h4 className="text-4xl font-semibold">TOTAL: ${totalCart()}</h4>
      <Button onClick={clearCart}>Vaciar carrito</Button>
      <Button><Link to="/checkout">Terminar mi compra</Link></Button>
    </section>
  );
};

export default CartView;

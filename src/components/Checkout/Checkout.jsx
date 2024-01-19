import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import Button from '@mui/material/Button';

import Swal from "sweetalert2";

const Checkout = () => {
  const { cart, totalCart, clearCart } = useContext(CartContext);

  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orden = {
      cliente: values,
      items: cart,
      total: totalCart(),
      fecha: new Date(),
    };
    console.log(orden);

    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, orden)
      .then((doc) => {
        setOrderId(doc.id);
        clearCart();
        Swal.fire({
          icon: "success",
          title: "Compra realizada con éxito",
          text: `Tu código de orden es: ${doc.id}`,
          background: "#202020",
          color: "#FFFFFF",
        });
      })
      .catch((error) => {
        // Manejar errores al agregar a Firestore
        console.error("Error al agregar a Firestore:", error.message);
      });
  };

  if (orderId) {
    return (
      <div className="container m-auto mt-10">
        <h2 className="text-4xl font-semibold">Gracias por tu compra</h2>
        <hr />
        <p>Tu código de orden es: {orderId}</p>
      </div>
    );
  }

  return (
    <div className="container m-auto mt-10">
      <h2 className="text-4xl font-semibold">Checkout</h2>
      <hr />

      <h4>Ingresa tus datos:</h4>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mt-4"
      >
        <input
          className="border p-2"
          type="text"
          placeholder="Nombre"
          value={values.nombre}
          onChange={handleInputChange}
          name="nombre"
        />

        <input
          className="border p-2"
          type="text"
          placeholder="Dirección"
          value={values.direccion}
          onChange={handleInputChange}
          name="direccion"
        />
        <input
          className="border p-2"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleInputChange}
          name="email"
        />
        <Button type="submit" className="bg-green-500 text-black py-2" disabled={!values.nombre || !values.direccion || !values.email}>
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Checkout;


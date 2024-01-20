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
    apellido:"",
    direccion: "",
    telefono:"",
    email: "",
    confirmEmail: "", 
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
          console.error("Error al agregar a Firestore:", error.message);
        });
    };

    if (orderId) {
      return (
        <div className="container m-auto mt-10">
          <h2 className="text-4xl font-semibold">Gracias por tu compra</h2>
          <hr className=" m-3" />
          <p>Tu código de orden es: {orderId}</p>
        </div>
      );
    }

    return (
      <div className="container m-auto mt-10">
        <h2 className="text-4xl font-semibold">Checkout</h2>
        <hr className=" m-3" />

        <h4>Ingresa tus datos:</h4>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mt-4">
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
            placeholder="Apellido"
            value={values.apellido}
            onChange={handleInputChange}
            name="apellido"
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
            type="text"
            placeholder="Teléfono"
            value={values.telefono}
            onChange={handleInputChange}
            name="telefono"
          />
          <input
            className="border p-2"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleInputChange}
            name="email"
          />
          <input
            className="border p-2"
            type="email"
            placeholder="Confirmar Email"
            value={values.confirmEmail}
            onChange={handleInputChange}
            name="confirmEmail"
          />
          <Button
            type="submit"
            className="bg-green-500 text-black py-2"
            disabled={
              !values.nombre ||
              !values.direccion ||
              !values.email ||
              !values.confirmEmail ||
              values.email !== values.confirmEmail
            }
          >
            Realizar compra
          </Button>
        </form>
      </div>
    );
          
          }

export default Checkout;


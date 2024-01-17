import { Link } from "react-router-dom"
import Button from '@mui/material/Button';


const EmtpyCart = () => {

    return (
        <section className="container m-auto mt-8">
        <h2 className="text-4xl font-semibold">Tu carrito está vacío</h2>
        <hr />
        <p>Agrega algún producto a tu carrito</p>
        <Button>
          <Link to={"/"}>Volver</Link>
        </Button>
      </section>
    )
}

export default EmtpyCart
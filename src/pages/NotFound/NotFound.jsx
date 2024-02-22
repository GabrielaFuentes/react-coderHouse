import img from "./NotFound.png";
import { useNavigate } from "react-router-dom"

function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <img src={img} alt="logo" />
      <button onClick={() => navigate("/")}> Volver al Inicio</button>
    </>

  )
}

export default NotFound;

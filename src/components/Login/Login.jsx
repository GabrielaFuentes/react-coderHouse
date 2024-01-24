import { useContext, useState } from "react";
import "./Login.scss";
import { UserContext } from "../../context/UserContext";
import Button from '@mui/material/Button';


const Login = () => {
  const { login, register, googleLogin } = useContext(UserContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(values);
  };

  return (
    <div className="login-container">
      <div className="p-8 rounded bg-white">
        <h2 className="text-2xl font-semibold w-80">Login</h2>
        <hr />

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
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
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleInputChange}
            name="password"
          />

          <Button type="submit" className="bg-blue-500 text-white py-2">
            Ingresar
          </Button>
        </form>

        <Button
          onClick={() => register(values)}
          className="bg-blue-500 text-white p-2 mt-4"
        >
          Registrar
        </Button>
            <br/>
        <Button
          onClick={googleLogin}
          className="bg-blue-500 text-white p-2 mt-4"
        >
          Iniciar sesión con Google
        </Button>
      </div>
    </div>
  );
};

export default Login;

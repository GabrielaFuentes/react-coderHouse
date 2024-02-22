import './App.css'
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import AppRouter from "./components/router/AppRouter";


const App = () => {

  return (
    <>
      <UserProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </UserProvider>
    </>
  );
};

export default App;

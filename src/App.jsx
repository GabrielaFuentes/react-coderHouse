import './App.css'
import NavBar from "./components/Navbar/Navbar";
import NotFound from "./pages/NotFound/NotFound";
import Checkout from './components/Checkout/Checkout';
import CartView from './components/CartView/CartView';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
const App = () => {



  return (
    <>
    <UserProvider>
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/category/:category_id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<CartView />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      </CartProvider>
      </UserProvider>

    </>

  );
};


export default App;

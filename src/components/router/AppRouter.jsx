import { useContext } from "react";
import { UserContext } from '../../context/UserContext';
import CategoryProduct from '../../components/CategoryProduct/CategoryProduct';
import Login from "../../components/Login/Login";
import NavBar from "../../components/Navbar/Navbar";
import NotFound from "../../pages/NotFound/NotFound";
import Checkout from '../../components/Checkout/Checkout';
import CartView from '../../components/CartView/CartView';
import HomePage from "../../pages/HomePage/HomePage";
import ContactPage from "../../pages/ContactPage/ContactPage";
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Router>
        <NavBar />
        {user.logged ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/category/:category_id" element={<CategoryProduct />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />
          </Routes>
        )}
      </Router>
    </>
  )

}

export default AppRouter;

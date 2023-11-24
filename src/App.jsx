import "./App.css";
import { useState } from 'react';
import NavBar from "./components/Navbar/Navbar";
import ProductsCard from "./components/ProductsCard/ProductsCard";
import NotFound from "./pages/NotFound/NotFound";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (data) => {
    setProductData(data);
    setHasSearched(true);
  };

  return (
    <>
      <Router>
        <NavBar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/items/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <div className="App">
        <div>
          {hasSearched && (
            <div>
              {productData.length > 0 ? (
                productData.map((product) => (
                  <ProductsCard key={product.id} productData={product} />
                ))
              ) : (
                <p>No se encontraron resultados.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;

import "./App.css";
import { useState } from 'react';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/Navbar";
import ProductsCard from "./components/ProductsCard/ProductsCard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import DetailPage from "./pages/DetailPage/DetailPage";

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
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
      <div className="App">
        <div>

          <ItemListContainer />
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

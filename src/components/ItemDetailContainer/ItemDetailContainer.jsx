import { useState, useEffect } from "react";
import axios from "axios";

import { Link, useParams } from "react-router-dom";
import ProductsCard from "../ProductsCard/ProductsCard";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios(`https://api.mercadolibre.com/items/${id}`)
      .then((res) => {
        console.log("Producto:", res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error al obtener los detalles del producto:", error);
      });
  }, [id]);

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/items/${product.id}`} key={product.id}>
              <ProductsCard product={product.id} />
            </Link>
            
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetailContainer;

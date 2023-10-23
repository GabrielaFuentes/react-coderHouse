import { useState, useEffect } from "react";
import axios from "axios";
import CardUser from "../CardUser/CardUser";

import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://api.mercadolibre.com/sites/MLA/search?q=").then((res) =>
      setProducts(res.data.results)
    );
  }, []);

  return (
    <div className="Cards-List">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/detail/${product.id}`}>
              <CardUser product={product} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetailContainer;
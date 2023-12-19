import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductsCard from "../../components/ProductsCard/ProductsCard";


const DetailPage = () => {
  let { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios(`https://api.mercadolibre.com/sites/MLA/search?q=${id}`).then((res) =>
    setProduct(res.data.results)
    );
  }, [id]);

  return (
    <div className="flex flex-wrap justify-start gap-10 items-center">
      {product.id ? <ProductsCard product={product} /> : null}
    </div>
  );
};

export default DetailPage;

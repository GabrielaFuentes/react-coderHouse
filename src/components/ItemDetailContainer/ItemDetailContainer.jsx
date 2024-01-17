import { useEffect, useState } from 'react';
import { obtenerDatos } from "../../utils/utils";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    obtenerDatos()
      .then((data) => {
        const selectedItem = data.find(prod => prod.id === id);
        setItem(selectedItem);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <>
      {item && (
        <div className="container m-auto mt-8">
          <Link to="/">
            <Button>Volver</Button>
          </Link>
          <ItemDetail
            thumbnail={item.thumbnail}
            title={item.title}
            price={item.price}
            currency_id={item.currency_id}
            condition={item.condition}
            description={item.description}
          />
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;

import { useEffect, useState } from 'react';
import { obtenerDatos } from "../../utils/utils";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  // eslint-disable-next-line no-unused-vars
  const [item, setItem] = useState(null);
  const { itemId } = useParams();
  
  useEffect(() => {
  
    obtenerDatos()
      .then((data) => {
  
        const selectedItem = data.find(prod => prod.id  === itemId);
  
        setItem(selectedItem);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [itemId]);
  

  return (
    <>
 {item && <ItemDetail
        thumbnail={item.thumbnail}
        title={item.title}
        price={item.price}
        currency_id={item.currency_id}
        condition={item.condition}
        id={item.id}
        description={item.description}
      />}    </>
  );
}

export default ItemDetailContainer;

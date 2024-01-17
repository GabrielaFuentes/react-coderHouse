import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { obtenerDatos } from "../../utils/utils";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { category_id } = useParams();
  console.log('category_id:', category_id);

  useEffect(() => {
    obtenerDatos()
      .then((data) => {
        console.log('Data obtenida:', data);

        const items = category_id
          ? data.filter((prod) => prod.category_id === category_id)
          : data;

        console.log('Items después del filtro:', items);
        setProductos(items);
      })
      .catch((error) => {
        console.error('Error obteniendo datos:', error);
      });
  }, [category_id]);

  console.log('Productos renderizados:', productos);

  return (
    <>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;

import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { category_id } = useParams();
  console.log('category_id:', category_id);

 

  useEffect(() => {
    

    // 1.- Armar una referencia (sync)
    const productosRef = collection(db, 'productos')
    const docsRef = category_id
                      ? query( productosRef, where('category', '==', category_id))
                      : productosRef
    // 2.- LLamar a esa referencia (async)
    getDocs(docsRef)
      .then((querySnapshot) => {
        const docs = querySnapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        })
        
        console.log( docs )
        setProductos( docs )
      })
     

}, [category_id])

  console.log('Productos renderizados:', productos);

  return (
    <>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;

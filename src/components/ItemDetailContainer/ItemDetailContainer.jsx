import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";



function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams();


  useEffect(() => {
  

    const docRef = doc(db, 'productos', id)
    getDoc( docRef )
      .then((docSnapshot) => {
        console.log(docSnapshot)
        const doc = {
          ...docSnapshot.data(),
          id: docSnapshot.id
        }

        setItem(doc)
        console.log(doc)
        console.log(id)
      })
    

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
            id={item.id}
            title={item.title}
            price={item.price}
            currency_id={item.currency_id}
            condition={item.condition}
            description={item.description}
            stock={item.stock}
          />
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;

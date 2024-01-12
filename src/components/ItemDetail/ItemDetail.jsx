
import "./ItemDetail.css"; 
import ProductsCard from "./../ProductsCard/ProductsCard";  // Import the ProductsCard component

const ItemDetail = ({ itemId }) => {
  return (
    <>
      <ProductsCard productData={itemId} buttonText="Agregar al carrito" />
      </>
  );
};
export default ItemDetail;

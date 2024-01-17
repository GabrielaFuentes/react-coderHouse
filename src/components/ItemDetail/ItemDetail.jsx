import Button from '@mui/material/Button';



const ItemDetail = ({ thumbnail, title, price, currency_id, condition, description }) => {
  const handleAgregarAlCarrito = () => {
    // Lógica para agregar al carrito
    console.log('Agregado al carrito:', title);
  };

  return (
    <>
      <div>
        <div className="flex gap-8 pt-4">
        <img src={thumbnail} alt="Product Image" />
        </div>
        <h4 className=" mt-4 text-2xl font-semibold">{title}</h4>
        <p className="text-xl font-bold">{price} {currency_id}  - {condition}</p>
      
        <p>{description}</p>
        <Button onClick={handleAgregarAlCarrito}>Agregar al carrito</Button>
      </div>
    </>
  );
};

export default ItemDetail;


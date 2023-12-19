import Button from '@mui/material/Button';

const QuantitySelector = ({cantidad, stock, setCantidad}) => {

  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1)
  }

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  return (
    <div className="flex gap-4 items-center">
      <Button onClick={handleRestar}>-</Button>
      <span>{cantidad}</span>
      <Button onClick={handleSumar}>+</Button>
    </div>
  );
};

export default QuantitySelector;
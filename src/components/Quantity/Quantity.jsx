import Button from '@mui/material/Button';

const Quantity = ({ cantidad, stock, setCantidad }) => {
  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  return (
    <div className="flex gap-4 items-center">
      <Button
        onClick={handleRestar}
        className={`${cantidad === 1 ? 'bg-red-300' : 'bg-blue-600'} rounded py-2 px-4 text-white font-semibold`}
        disabled={cantidad === 1}
      >
        -
      </Button>

      <span>{cantidad}</span>
      <Button
        onClick={handleSumar}
        className={cantidad === stock 
          ? `bg-red-300 rounded py-2 px-4 text-white font-semibold`
          : `bg-blue-600 rounded py-2 px-4 text-white font-semibold`
        }
        disabled={cantidad === stock}
      >
        +
      </Button>
    </div>
  );
};

export default Quantity;

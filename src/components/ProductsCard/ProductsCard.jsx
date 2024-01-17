import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import "./../ItemDetail/ItemDetail.css";

const ProductsCard = ({ productData, buttonText = 'Ver mas' }) => {
  const { thumbnail, title, price, currency_id, condition } = productData;

  return (
    <div className="w-80 border border-gray-300 rounded-lg overflow-hidden shadow-md p-4 h-96 flex flex-col justify-between items-center">
      <img src={thumbnail} alt="Product Image" />
      <h4 className="text-2xl font-semibold">{title}</h4>
      <p className="text-xl">{price} {currency_id} - {condition}</p>

      <Button size="small" >
        <Link to={`/item/${productData.id}`} className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700">
          {buttonText}
        </Link>
      </Button>
    </div>
  );
};

export default ProductsCard;

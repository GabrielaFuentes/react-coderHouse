import { useContext, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Quantity from '../Quantity/Quantity';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, thumbnail, title, price, currency_id, condition, description, stock }) => {
  const { addToCart, isInCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const handleAgregar = () => {
    const itemToCart = {
      id,
      thumbnail,
      title,
      price,
      currency_id,
      condition,
      description,
      stock,
      cantidad,
    };
    console.log("Item to Cart:", itemToCart);

    addToCart(itemToCart);
    
  };

  console.log("ItemDetail - cantidad:", setCantidad);

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            image={thumbnail}
            alt="Product Image"
            sx={{ height: 140 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="text-xl font-bold">
              {price} {currency_id} - {condition}
            </Typography>
            <Typography variant="body5">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {isInCart(id) ? (
            <Button>
              <Link to="/cart">Terminar compra</Link>
            </Button>
          ) : (
            <>
              <Quantity id={id} cantidad={cantidad} stock={stock} />
              {console.log(stock)}
              <Button size="small" onClick={handleAgregar} disabled={stock === 0}>
                Agregar a Carrito
              </Button>
            </>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default ItemDetail;

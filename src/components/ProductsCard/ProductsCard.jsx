import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";

const ProductsCard = ({ productData, buttonText = 'Ver mas' }) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={productData.thumbnail}
          alt="Product Imagen"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {productData.price} {productData.currency_id} - {productData.condition}
          </Typography>
          <Typography>
          { productData.stock <= 10 && <p className="font-bold text-red-500">Quedan sólo {productData.stock} unidades</p> }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <Link to={`/item/${productData.id}`} className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700">

          {buttonText}
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};



     

export default ProductsCard;

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const ProductsCard = ({ productData }) => {
  const { thumbnail, title, price, currency_id, condition } = productData
  return (
    <div className="flex space-x-4">
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={thumbnail}
            sx={{ width: 200 }}
            alt="Product Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {price} {currency_id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {condition}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link to={`/item/${productData.id}`}> Ver mas</Link>
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProductsCard;


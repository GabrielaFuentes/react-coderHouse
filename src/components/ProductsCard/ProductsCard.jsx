import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./ProductsCard.css";

const ProductsCard = ({ productData }) => {
  const { thumbnail, title, price, currency_id } = productData
  return (
    <div className="cards-list">
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          image={thumbnail}
          alt="Product Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {currency_id}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
};

export default ProductsCard;


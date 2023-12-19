//import { useState } from "react";
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea , CardActions} from "@mui/material";
import { Link } from "react-router-dom";



const ItemDetail = ({thumbnail, title, price, currency_id, condition, id, description }) => {
    console.log(ItemDetail)
    return (
    
        <div className="container m-auto mt-8">
          <Link  to="/">
              <Button>Volver</Button>
              </Link>
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
            <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
          </CardContent>
          <CardActions>
          <Button >
           <Link to={`/item/${id}`}> Agregar al carrito</Link>
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
      </div>
    );
  };


export default ItemDetail;

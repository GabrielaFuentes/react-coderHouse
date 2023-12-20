//import { useState } from "react";
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";



const ItemDetail = ({ itemId }) => {


  return (

    <div className="container m-auto mt-8">

      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={itemId.thumbnail}
            sx={{ width: 200 }}
            alt="Product Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {itemId.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {itemId.price} {itemId.currency_id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {itemId.condition}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {itemId.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button >
              <Button> Agregar al carrito</Button>
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
};


export default ItemDetail;

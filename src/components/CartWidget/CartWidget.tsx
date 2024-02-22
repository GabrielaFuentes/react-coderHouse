import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CardWidget = () => {
  const { itemsInCart } = useContext(CartContext)

  return (
    <Link to="/cart">
      <Badge badgeContent={0} color="primary">
        <ShoppingCartIcon sx={{ fontSize: "30px" }} />
        {itemsInCart()}
      </Badge>
    </Link>
  );
};
export default CardWidget;

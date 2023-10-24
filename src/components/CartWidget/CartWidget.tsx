import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";


const CardWidget = () => {
  return (
    <Link to="/">
      <Badge badgeContent={0} showZero color="primary">
      <ShoppingCartIcon sx={{ fontSize: "20px" }} />
      </Badge>
    </Link>
  );
};
export default CardWidget;

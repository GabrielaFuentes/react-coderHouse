import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CardWidget = () => {
  return (
    <div>
      <ShoppingCartIcon sx={{ fontSize: "20px" }} />
      <span>0</span>
    </div>
  );
};
export default CardWidget;

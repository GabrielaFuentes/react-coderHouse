import { useState, useEffect } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';
import ProductsCard from './../ProductsCard/ProductsCard';

function ItemListContainer() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    handleClose();
  };

  useEffect(() => {
    axios.get('https://api.mercadolibre.com/sites/MLA/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener las categorías:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      // Realiza una solicitud para obtener productos relacionados con la categoría seleccionada
      axios
        .get(`https://api.mercadolibre.com/sites/MLA/search?category=${selectedCategory.id}`)
        .then((response) => {
          setRelatedProducts(response.data.results);
        })
        .catch((error) => {
          console.error('Error al obtener los productos relacionados:', error);
        });
    }
  }, [selectedCategory]);

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Categorías
      </Button>
      <Menu
        id="demo-customized-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {categories.map((category) => (
          <MenuItem
            key={category.id}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </MenuItem>
        ))}
      </Menu>
      {relatedProducts.length > 0 && relatedProducts.map((product) => (
        <ProductsCard key={product.id} productData={product} />
      ))}
    </div>
  );
}

export default ItemListContainer;

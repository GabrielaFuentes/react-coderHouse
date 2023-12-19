import { useEffect, useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MOCK_DATA } from '../../mock/data';
import ProductsCard from './../ProductsCard/ProductsCard';

function ItemListContainer() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);


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
    // Obtén las categorías únicas de los productos
    const uniqueCategories = [...new Set(MOCK_DATA.map((product) => product.category_id))];
    setCategories(uniqueCategories);
    setLoading(false);
  }, []);

  useEffect(() => {
    // Filtra los productos relacionados por la categoría seleccionada
    if (selectedCategory) {
      const filteredProducts = MOCK_DATA.filter((product) => product.category_id === selectedCategory);
      setRelatedProducts(filteredProducts);
    } else {
      setRelatedProducts([]); // Si no hay categoría seleccionada, muestra todos los productos
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
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </MenuItem>
        ))}
      </Menu>
      {relatedProducts.length > 0 &&
        relatedProducts.map((product) => (
          <ProductsCard key={product.id} productData={product} />
        ))}
    </div>
  );
}

export default ItemListContainer;

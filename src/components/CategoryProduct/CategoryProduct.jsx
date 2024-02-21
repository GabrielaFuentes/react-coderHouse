import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Link } from 'react-router-dom';
import ProductsCard from '../ProductsCard/ProductsCard';
import { Button, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClipLoader } from 'react-spinners';

const CategoryProduct = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(false); // New state for loading indicator
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
    const fetchCategories = async () => {
      try {
        const productosRef = collection(db, 'productos');
        const productosSnapshot = await getDocs(productosRef);

        const uniqueCategories = new Set();

        productosSnapshot.forEach((doc) => {
          const category_id = doc.data().category_id;
          if (category_id) {
            uniqueCategories.add(category_id);
          }
        });

        const categoriesData = Array.from(uniqueCategories);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      if (selectedCategory) {
        setLoading(true); // Set loading to true before fetching data
        try {
          const productosRef = collection(db, 'productos');
          const q = query(productosRef, where('category_id', '==', selectedCategory));
          const querySnapshot = await getDocs(q);

          const docs = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              ...data,
              photo: data.photo, 
              description: data.description,
              price: data.price,
              stock: data.stock,
              title: data.title,
            };
          });
          if(docs.length > 0){
            setRelatedProducts(docs);
          }else{
           
            <Link to="*" ><Button>Volver</Button></Link>
          }
          
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setLoading(false); 
        }
      }
    };

    fetchProductsByCategory();
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
          <MenuItem key={category} onClick={() => handleCategoryClick(category)}>
            <Link to={`/category/${category}`}>{category}</Link>
          </MenuItem>
        ))}
      </Menu>

      {loading ? (
  <div className="spinner-container">
    <ClipLoader color="#3f51b5" loading={loading} size={30} />
  </div>
) : (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {relatedProducts.map((product) => (
          <ProductsCard key={product.id} productData={product} />
        ))}
      </div>
)}
    </div>
  );
}
 
export default CategoryProduct;

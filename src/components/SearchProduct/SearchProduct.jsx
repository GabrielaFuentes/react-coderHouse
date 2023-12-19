import { useState } from 'react';



// mui components
import { TextField } from "@mui/material";
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



import axios from "axios";


const SearchProduct = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const [productData, setProductData] = useState([]);


  const handlerOnChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const product = value.toLowerCase().replace(/ /g, "");
    console.log("Product a buscar:", product);

    if (product) {
      axios
        .get(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`)
        .then((response) => {
          setProductData(response.data.results);
          onSearch(response.data.results);
          console.log(productData)
        })
        .catch((error) => {
          console.log("Error en la solicitud a la API:", error);
        });
    }
    setValue("");
  };

  return (
    <div>

      <div style={{ margin: 40 }}>
        <form form onSubmit={e => onSubmit(e)}>
          <TextField
            placeholder="Buscar producto..."
            variant="outlined"
            className="TextField"
            value={value}
            onChange={handlerOnChange}
          />
          <IconButton variant="contained" type="submit">
            <SearchIcon className="btn" />
          </IconButton>
        </form>

      </div>

    </div>
  );
};

export default SearchProduct;



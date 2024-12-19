import React from 'react';
import { Typography, Box, Breadcrumbs, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

 const ProductList = ()=>{
      const navigate = useNavigate(); 
    const handleHomeClick = () => {
        navigate('/'); 
      };
    
    return(
        <div>
         <Breadcrumbs aria-label="breadcrumb">
                <Link
                  color="inherit"
                  onClick={handleHomeClick} 
                  sx={{ cursor: 'pointer' }}
                >
                  Home
                </Link>
                <Typography color="text.primary">Product List</Typography>
              </Breadcrumbs>
              </div>
    )
}
export default ProductList;
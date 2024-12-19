
import React from 'react';
import { Typography, Box, Breadcrumbs, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate(); 

  const handleHomeClick = () => {
    navigate('/'); 
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          color="inherit"
          onClick={handleHomeClick} 
          sx={{ cursor: 'pointer' }}
        >
          Home
        </Link>
        <Typography color="text.primary">Cart</Typography>
      </Breadcrumbs>

      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      <Typography variant="body1">
Cart is empty      </Typography>
      {/* Add cart items and functionality here */}
    </Box>
  );
};

export default CartPage;

import React, { useContext } from 'react';
import { Typography, Box, Breadcrumbs, Link, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/cart-context';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

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
      {cartItems.length === 0 ? (
        <Typography variant="body1">Cart is empty</Typography>
      ) : (
        cartItems.map((item, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <img src={item.img} alt={item.title} style={{ width: 100, marginRight: 16 }} />
            <Typography variant="body1">{item.title}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
              <IconButton onClick={() => removeFromCart(item)}>
                <RemoveIcon />
              </IconButton>
              <Typography variant="body1">{item.quantity}</Typography>
              <IconButton onClick={() => addToCart(item)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Typography variant="body1" sx={{ marginLeft: 2 }}>
              ₹{item.price}
            </Typography>
          </Box>
        ))
      )}
    </Box>
  );
};

export default CartPage;
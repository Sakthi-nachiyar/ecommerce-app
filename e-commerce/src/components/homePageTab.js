import React, { useState, useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box,IconButton,Button, Snackbar, Alert,Card,CardMedia,CardActions,CardContent } from "@mui/material";
import Grid from '@mui/material/Grid2';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useNavigate } from 'react-router-dom';
import {allProducts,newArrival,bestSeller} from '../components/data';
import { CartContext } from "../context/cart-context";


function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function HomePageTab() {
  const [value, setValue] = React.useState(0); 
    const { addToCart } = useContext(CartContext);
    const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const getImage = (index) =>{
    switch(index){
      case 0 : 
      return newArrival;
      case 1: 
      return bestSeller;
      default:
        return [];
    }
  }
  const handleChange = (event,newValue) => {
    setValue(newValue); 
  };
  const handleShopAllClick = () => {
    const page = 'Shop All'
    const productList = allProducts
    navigate('/product-list',{ state: { productList,page} }); // Navigate to the Product List page
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Close the snackbar
  };
  return (
    <>
    <Box sx={{ bgcolor: 'background.paper', width:'100%',padding:'40px'}}>
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',mb:2}}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="New Arrivals" {...a11yProps(0)} />
          <Tab label="Best sellers" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      </Box>
      <Grid container spacing={2} column={6} sx={{ padding: 2 }}>
      {getImage(value).map((item,index) =>(
      <Grid size={2} item xs={12} sm={6} md={4} key={index}>
      <Card sx={{ maxWidth: 345}}>
        <CardMedia
          component="img"
          alt={item.title}
          height="250"
          image={item.img}
        />
        <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="h6" color="text.primary">
              ₹{item.price}
              </Typography>
            </CardContent>
            <CardActions>
            <IconButton
                  sx={{cursor:'pointer',padding:'9px',borderRadius:'8px'}}
                  onClick={() => {
                    addToCart({ ...item})
                    setOpenSnackbar(true);
                  }}
                  >
                <ShoppingBagOutlinedIcon sx={{color:'#d4dca4'}}/>
                </IconButton>
            </CardActions>
            </Card>
            </Grid>
      ))}
      </Grid>
      <Button variant="contained" onClick={handleShopAllClick} style={{minWidth:'130px',left:'5px'}}>Shop All</Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" variant="filled" sx={{ width: '100%' }}>
          Item added to cart!
        </Alert>
      </Snackbar>
    </Box>  
    </>
  );
}

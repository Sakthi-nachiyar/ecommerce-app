import React, { useState, useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, ImageList, ImageListItem,ImageListItemBar } from "@mui/material";
import {IconButton,Button, Snackbar, Alert} from '@mui/material';
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
      <ImageList variant="standard" cols={3} gap={30}>
        {getImage(value).map((item,index) =>(
           <ImageListItem key={index}>
           <img
             src={item.img}
             alt={item.title}
             loading="lazy"
             style={{ width: '50%', borderRadius: '8px' }}
           />
            <ImageListItemBar
              sx={{
                  fontSize:10,padding:'4px'
              }}
              title={item.title}
              position="below"
              actionIcon={
                <IconButton
                  sx={{cursor:'pointer',padding:'9px',borderRadius:'8px'}}
                  onClick={() => {
                    addToCart({ ...item})
                    setOpenSnackbar(true);
                  }}
                  >
                <ShoppingBagOutlinedIcon sx={{color:'#d4dca4'}}/>
                </IconButton>
              }
              actionPosition="right"
            />
            <Typography sx={{ margin: '-16px 0px 0px 5px'}}>
            ₹{item.price}
            </Typography>
          </ImageListItem>
        ))}
      </ImageList>
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

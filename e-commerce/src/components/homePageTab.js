import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, ImageList, ImageListItem,ImageListItemBar } from "@mui/material";
import clock from '../assets/clock.png';
import wallSticker from '../assets/wall sticker.png';
import fridgeDecor from '../assets/fridgemagnet.png';
import dinnerImage from '../assets/dinner.jpg'
import ovenImage from '../assets/oven.jpg'
import flowerImage from '../assets/flower.jpg'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useNavigate } from 'react-router-dom';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function HomePageTab() {
  const [value, setValue] = React.useState(0); 

  const navigate = useNavigate();
  const newArrival = [
    {
      img: clock,
      title: "Wall clock",
      price:'200/-'
    },
    {
      img: wallSticker,
      title: "Wall sticker",
      price:'100/-'
    },
    {
      img: fridgeDecor,
      title: "Fridge Magnet",
      price:'100/-'
    }
  ];

  const bestSeller = [
    {
      img: flowerImage,
      title: "Flower vase",
      price:'1000/-'
    },
    {
      img: ovenImage,
      title: "Oven",
      price:'30,000/-'
    },
    {
      img: dinnerImage,
      title: "Dinner set",
      price:'2000/-'
    }
  ];

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
    navigate('/product-list'); // Navigate to the Product List page
  };
  return (
    <>
    <Box sx={{ bgcolor: 'background.paper', width: 800 ,padding:'40px'}}>
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
      <Button variant="contained" onClick={handleShopAllClick} style={{minWidth:'130px',left:'242px'}}>Shop All</Button>
      </Box>
      <ImageList variant="standard" cols={3} gap={30}>
        {getImage(value).map((item,index) =>(
           <ImageListItem key={index}>
           <img
             src={item.img}
             alt={item.title}
             loading="lazy"
             style={{ width: '100%', borderRadius: '8px' }}
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
                  onClick = {{handleChange}}
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
    </Box>  
    </>
  );
}

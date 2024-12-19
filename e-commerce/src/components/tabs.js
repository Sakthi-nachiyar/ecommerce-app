import * as React from 'react';
import { useTheme } from '@mui/material/styles';
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0); 

  const newArrival = [
    {
      img: clock,
      title: "Wall clock",
    },
    {
      img: wallSticker,
      title: "Wall sticker",
    },
    {
      img: fridgeDecor,
      title: "Fridge Magnet",
    }
  ];

  const bestSeller = [
    {
      img: flowerImage,
      title: "Flower vase",
    },
    {
      img: ovenImage,
      title: "Oven",
    },
    {
      img: dinnerImage,
      title: "Dinner set",
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
      <Button variant="contained" style={{minWidth:'130px',left:'242px'}}>Shop All</Button>
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
                  sx={{cursor:'pointer',fontSize:'1rem',padding:'11px',color:'black',borderRadius:'8px',background:'#d4dca4'}}
                >
                  Add to Cart
                </IconButton>
              }
              actionPosition="right"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {/* <TabPanel value={value} index={0} dir={theme.direction}>
      New Arrivals
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
       Best sellers
      </TabPanel> */}
    </Box>  
    </>
  );
}

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, ImageList, ImageListItem } from "@mui/material";
import clock from '../assets/clock.png';
import wallSticker from '../assets/wall sticker.png';
import fridgeDecor from '../assets/fridgemagnet.png';
import appliaceImage from '../assets/appliances.png'


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
      title: "Home Decor",
    },
    {
      img: wallSticker,
      title: "Appliances",
    },
    {
      img: fridgeDecor,
      title: "Furnishings",
    }
  ];

  const bestSeller = [
    {
      img: clock,
      title: "Home Decor",
    },
    {
      img: wallSticker,
      title: "Appliances",
    },
    {
      img: appliaceImage,
      title: "Furnishings",
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
    <Box sx={{ bgcolor: 'background.paper', width: 500 ,padding:'40px'}}>
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
      <ImageList variant="standard" cols={3} gap={8}>
        {getImage(value).map((item,index) =>(
           <ImageListItem key={index}>
           <img
             src={item.img}
             alt={item.title}
             loading="lazy"
             style={{ width: '100%', borderRadius: '8px' }}
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
  );
}

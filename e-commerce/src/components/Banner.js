import React from "react";
import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import mainImage from "../assets/mainImage.png";
import decorImage from "../assets/Decor.png";
import appliancesImage from "../assets/appliances.png";
import furnitureImage from "../assets/furniture.png";
import kitchenWareImage from "../assets/kitchenware.png";
import {decor,appliances,furniture,kitchenware} from './data'
import { Link } from 'react-router-dom'; 
import HomePageTab from "./homePageTab"
const Banner = () => {
  const itemData = [
    {
      img: decorImage,
      title: "Home Decor",
      state: { productList: decor, page:'Home Decor'} // Navigate to the Product List page
    },
    {
      img: appliancesImage,
      title: "Appliances",
        state: { productList: appliances, page:'Appliances'} 
    },
    {
      img: furnitureImage,
      title: "Furnishings",
     state: { productList: furniture, page:'Furnishings'}
    },
    {
      img: kitchenWareImage,
      title: "Kitchenware",
       state: { productList: kitchenware, page:'Kitchenware'} 
    },
  ];

  const srcset = (image, size)=>{
    return {
      src: `${image}?w=${size}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * 2}&fit=crop&auto=format 2x`,
    };
  }
  return (
    <>
      <ImageList
        sx={{padding:'0px 30px',height:'220px',justifyItems:'center'}}
        variant="quilted"
        cols={4}
        rowHeight={140}
        gap= {220}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            style={{ cursor: 'pointer' }}
          >
          <Link to={'/product-list'} state={item.state}>
            <img
              {...srcset(item.img, 100)}
              alt={item.title}
              loading="lazy"
            />
            </Link>;
            <ImageListItemBar
                title={item.title}
                position="below"
                sx={{
                    width:'100px',
                    left:'20px'
                  }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div>
        <Box sx={{ textAlign: "center", padding: 2 }}>
          <img
            src={mainImage}
            alt="mainImage"
            style={{ width: "1188px", height: "476px" }}
          />
        </Box>
      </div>
      <HomePageTab />
    </>
  );
};

export default Banner;

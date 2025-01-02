import React from "react";
import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import mainImage from "../assets/mainImage.png";
import decorImage from "../assets/Decor.png";
import appliancesImage from "../assets/appliances.png";
import furnitureImage from "../assets/furniture.png";
import kitchenWareImage from "../assets/kitchenware.png";
import diningImage from '../assets/dining.png';
import BedRoomImage from '../assets/BedRoom.png';
import {decor,appliances,furniture,kitchenware} from './data'
import { Link } from 'react-router-dom'; 
import HomePageTab from "./homePageTab";
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
    {
      img: diningImage,
      title: "Dining Room",
     state: { productList: furniture, page:'Furnishings'}
    },
    {
      img: BedRoomImage,
      title: "Bed Room",
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
        sx={{width: '100%',padding:'0px 30px',justifyItems:'center'}}
        variant="quilted"
        cols={6}
        gap= {16}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              '&:hover img': {
                transform: 'scale(1.1)', // Scale effect
                transition: 'transform 0.3s ease',
              },
              '&:hover .image-bar': {
                opacity: 1, // Make title bar more prominent
                transition: 'opacity 0.3s ease',
              },
            }}
          >
          <Link to={'/product-list'} state={item.state}>
            <img
              {...srcset(item.img, 100)}
              alt={item.title}
              loading="lazy"
              style={{
                width: '90%',
                display: 'block',
                transition: 'transform 0.3s ease',
              }}
            />
            </Link>;
            <ImageListItemBar
                title={item.title}
                position="below"
                sx={{
                    width:'100px',
                    left:'66px'
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

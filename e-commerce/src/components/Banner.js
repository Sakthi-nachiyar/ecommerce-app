import React from "react";
import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import mainImage from "../assets/mainImage.png";
import decorImage from "../assets/Decor.png";
import appliancesImage from "../assets/appliances.png";
import furnitureImage from "../assets/furniture.png";
import kitchenWareImage from "../assets/kitchenware.png";

const Banner = () => {
  const itemData = [
    {
      img: decorImage,
      title: "Decor",
      padding:'2px'
    },
    {
      img: appliancesImage,
      title: "Appliances",
    },
    {
      img: furnitureImage,
      title: "Furniture",
    },
    {
      img: kitchenWareImage,
      title: "Kitchen Ware",
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
        sx={{padding:'0px 36px'}}
        variant="quilted"
        cols={4}
        rowHeight={127}
        gap= {232}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 100)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
                title={item.title}
                sx={{
                    width:'130px',
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
    </>
  );
};

export default Banner;

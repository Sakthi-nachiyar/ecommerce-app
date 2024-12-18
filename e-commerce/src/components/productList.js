import React from "react";
import {
  Typography,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import clock from "../assets/clock.png";
import wallSticker from "../assets/wall sticker.png";
import fridgeDecor from "../assets/fridgemagnet.png";
import dinnerImage from "../assets/dinner.jpg";
import ovenImage from "../assets/oven.jpg";
import flowerImage from "../assets/flower.jpg";
import craneImage from "../assets/crane.png";
import showPieceImage from "../assets/showPiece.png";
import wallHangingImage from "../assets/wallHanging.png";
import wallClockImage from "../assets/wallClock.png";
import IconButton from "@mui/material/IconButton";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const ProductList = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };
  const productList = [
    {
      img: clock,
      title: "Wall clock",
      price: "200/-",
    },
    {
      img: wallSticker,
      title: "Wall sticker",
      price: "100/-",
    },
    {
      img: fridgeDecor,
      title: "Fridge Magnet",
      price: "100/-",
    },
    {
      img: flowerImage,
      title: "Flower vase",
      price: "1000/-",
    },
    {
      img: ovenImage,
      title: "Oven",
      price: "30,000/-",
    },
    {
      img: dinnerImage,
      title: "Dinner set",
      price: "2000/-",
    },
    {
      img: showPieceImage,
      title: "flower pots",
      price: "1000/-",
    },
    {
      img: craneImage,
      title: "crane show Piece",
      price: "1500/-",
    },
    {
      img: wallHangingImage,
      title: "Wall Hanging",
      price: "2500/-",
    },
    {
      img: wallClockImage,
      title: "Wall clock",
      price: "250/-",
    },
  ];

  return (
    <>
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            color="inherit"
            onClick={handleHomeClick}
            sx={{ cursor: "pointer" }}
          >
            Home
          </Link>
          <Typography color="text.primary">Product List</Typography>
        </Breadcrumbs>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Centers horizontally
          alignItems: "center", // Centers vertically
          minHeight: "100vh", // Ensures full viewport height
          flexDirection: "column", // Optional: Center items vertically in the box
          margin:'10px 20px'
        }}
      >
        <ImageList variant="standard" cols={4} gap={30}>
          {productList.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <ImageListItemBar
                sx={{
                  fontSize: 10,
                  padding: "4px",
                }}
                title={item.title}
                position="below"
                actionIcon={
                  <IconButton
                    sx={{
                      cursor: "pointer",
                      padding: "9px",
                      borderRadius: "8px",
                    }}
                    onClick={{}}
                  >
                    <ShoppingBagOutlinedIcon sx={{ color: "#d4dca4" }} />
                  </IconButton>
                }
                actionPosition="right"
              />
              <Typography sx={{ margin: "-16px 0px 0px 5px" }}>
                ₹{item.price}
              </Typography>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};
export default ProductList;

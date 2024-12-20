import React, { useState } from "react";
import {
  Typography,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Breadcrumbs,
  Link,
  Button
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

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
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterComp from "./filter"

const ProductList = () => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const { state } = useLocation(); // Get state from location
  const { productList, page } = state;
  const handleHomeClick = () => {
    navigate("/");
  };

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

 

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
      <Button className="flex justify-end" variant="contained" onClick={handleFilter} startIcon={<FilterListIcon />} >Filter</Button>
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
      {showFilter && <FilterComp anchor="right" open={showFilter} toggleDrawer={setShowFilter} />}
    </>
  );
};

export default ProductList;
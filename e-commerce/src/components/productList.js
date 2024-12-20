import React, { useState, useContext } from "react";
import {
  Typography,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Breadcrumbs,
  Link,
  Button,
  IconButton
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterComp from "./filter";
import { CartContext } from "../context/cart-context";

const ProductList = () => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const { state } = useLocation(); // Get state from location
  const { productList, page } = state;
  const { addToCart } = useContext(CartContext);

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end", 
          margin: "10px 20px",
        }}
      >
        <Button
          variant="contained"
          onClick={handleFilter}
          startIcon={<FilterListIcon />}
          sx={{
            backgroundColor: "#d4dca4",
            color: "#000",
          }}
        >
          Filter
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          flexDirection: "column",
          margin: "10px 20px",
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
                    onClick={() => addToCart({ ...item, id: index })}
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
      {showFilter && (
        <FilterComp anchor="right" open={showFilter} toggleDrawer={setShowFilter} />
      )}
    </>
  );
};

export default ProductList;
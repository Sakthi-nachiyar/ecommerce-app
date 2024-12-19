
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import globalTheme from './components/theme';
import SearchAppBar from './components/NavBar';
import CartPage from './components/addToCart'; 
import Banner from './components/Banner';
import ProductList from "./components/productList"

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Router>
        <SearchAppBar />
        <br/>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path ="/product-list" element ={<ProductList />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

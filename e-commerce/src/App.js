import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import globalTheme from './components/theme';
import SearchAppBar from './components/NavBar';
import CartPage from './components/addToCart';
import Banner from './components/banner';
import ProductList from "./components/productList";
import { CartProvider } from './context/cart-context';

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <CartProvider>
        <Router>
          <SearchAppBar />
          <br/>
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product-list" element={<ProductList />} />
          </Routes>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
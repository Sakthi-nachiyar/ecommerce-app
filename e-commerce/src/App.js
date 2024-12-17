// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import globalTheme from './components/theme';
import SearchAppBar from './components/NavBar';
import FullWidthTabs from './components/tabs'; 
import CartPage from './components/add-to-cart'; 

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Router>
       
        <SearchAppBar />
        <br/>
        <Routes>
          <Route path="/" element={<FullWidthTabs />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

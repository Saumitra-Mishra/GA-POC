// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Link as MuiLink } from '@mui/material'; // Import Link as MuiLink

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
          E-Commerce Store
        </Typography>
        <MuiLink component={Link} to="/product-listing" color="inherit" underline="hover" sx={{ mr: 2 }}>Product Listing</MuiLink>
        <MuiLink component={Link} to="/product-details" color="inherit" underline="hover">Product Details</MuiLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

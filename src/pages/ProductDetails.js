// ProductDetails.js
import React, { useEffect } from 'react';
import { Container, Card, CardContent, Typography } from '@mui/material';
import ReactGA from 'react-ga4';

const ProductDetails = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/product-details", title: "Product Details" });
  }, []);

  const sendEventToGA = (action) => {
    ReactGA.event({
      category: "interaction",
      action: action,
    });
  };

  return (
    <Container>
      <h1>Product Details</h1>
      <Card onClick={() => sendEventToGA("clicked_product_details1")} sx={{ maxWidth: 300, cursor: "pointer" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Product 1 Details
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Details for Product 1
          </Typography>
        </CardContent>
      </Card>
      <Card onClick={() => sendEventToGA("clicked_product_details2")} sx={{ maxWidth: 300, cursor: "pointer" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Product 2 Details
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Details for Product 2
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetails;

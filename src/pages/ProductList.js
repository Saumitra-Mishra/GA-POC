// ProductListing.js
import React, { useEffect } from 'react';
import { Container, Card, CardContent, Typography } from '@mui/material';
import ReactGA from 'react-ga4';

const ProductListing = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/product-listing", title: "Product Listing" });
  }, []);

  const sendEventToGA = (action) => {
    ReactGA.event({
      category: "interaction",
      action: action,
    });
  };

  return (
    <Container>
      <h1>Product Listing</h1>
      <Card onClick={() => sendEventToGA("clicked_product1")} sx={{ maxWidth: 300, cursor: "pointer" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Product 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description for Product 1
          </Typography>
        </CardContent>
      </Card>
      <Card onClick={() => sendEventToGA("clicked_product2")} sx={{ maxWidth: 300, cursor: "pointer" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Product 2
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description for Product 2
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductListing;

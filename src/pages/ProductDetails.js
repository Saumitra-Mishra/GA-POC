import React, { useEffect, useRef, useState } from 'react';
import { Container, Card, CardContent, Typography } from '@mui/material';
import ReactGA from 'react-ga4';

const ProductDetails = () => {
  const numberOfProducts = 10; // Let's say we have 10 products
  const cardRefs = useRef(Array(numberOfProducts).fill().map(() => React.createRef()));
  const [viewedProducts, setViewedProducts] = useState(new Set());

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/product-details", title: "Product Details" });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const action = entry.target.getAttribute('data-ga-action');
            if (!viewedProducts.has(action)) {
              setViewedProducts(new Set(viewedProducts.add(action)));
              ReactGA.event({
                category: "interaction",
                action: action,
                label: "view",
              });
            }
          }
        });
      },
      {
        root: null, // Using the viewport as the viewing area
        rootMargin: '0px',
        threshold: 1.0, // Now requires 100% of the element to be in view
      }
    );

    cardRefs.current.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [viewedProducts]); // Adding viewedProducts to the dependency array

  const sendEventToGA = (action) => {
    ReactGA.event({
      category: "interaction",
      action: action,
    });
  };

  return (
    <Container>
      <h1>Product Details</h1>
      {Array.from({ length: numberOfProducts }, (_, index) => (
        <Card 
          key={index}
          ref={cardRefs.current[index]} // Directly assigning the ref from the refs array
          onClick={() => sendEventToGA(`clicked_product_details${index + 1}`)}
          sx={{ mb: 2, maxWidth: 300, cursor: "pointer" }} // Added margin for easier scrolling
          data-ga-action={`viewed_product_details${index + 1}`}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Product {index + 1} Details
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Details for Product {index + 1}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default ProductDetails;

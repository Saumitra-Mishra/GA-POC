import React, { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./Header";
import ProductListing from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import ReactGA from "react-ga4";

function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

const App = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default App;

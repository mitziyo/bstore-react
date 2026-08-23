import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Preloader } from "./components/preloader";
import { Navbar } from "./components/headers/Navbar";
import { Footer } from "./components/footer";
import { ProductQuickView } from "./components/modals/ProductQuickView";
import { HomePage } from "./screens/homePage";
import { ShopPage } from "./screens/shop";
import { CartPage } from "./screens/cart";
import { CheckoutPage } from "./screens/checkout";

function AppRoutes() {
  const location = useLocation();

  return (
    <div className="body_wrapper">
      <Preloader />
      <ProductQuickView />
      <Navbar relative={location.pathname !== "/"} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    new window.WOW().init();
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

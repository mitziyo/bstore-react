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
import { DashboardLayout } from "./screens/dashboard/DashboardLayout";
import { UserProfile } from "./screens/dashboard/UserProfile";
import { EbookLibrary } from "./screens/dashboard/EbookLibrary";
import { MyList } from "./screens/dashboard/MyList";
import { MyAddress } from "./screens/dashboard/MyAddress";
import { MyOrders } from "./screens/dashboard/MyOrders";
import { MyWishlist } from "./screens/dashboard/MyWishlist";
import { MyRatingReviews } from "./screens/dashboard/MyRatingReviews";
import { MyFollowingAuthors } from "./screens/dashboard/MyFollowingAuthors";

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
        <Route element={<DashboardLayout />}>
          <Route path="/my-account" element={<UserProfile />} />
          <Route path="/my-ebook-library" element={<EbookLibrary />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/my-address" element={<MyAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/my-wishlist" element={<MyWishlist />} />
          <Route path="/my-rating-reviews" element={<MyRatingReviews />} />
          <Route path="/my-following-authors" element={<MyFollowingAuthors />} />
        </Route>
        
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

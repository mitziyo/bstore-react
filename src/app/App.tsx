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
import { OrderTrack } from "./screens/dashboard/OrderTrack";
import { OrderConfirmation } from "./screens/dashboard/OrderConfirmation";
import { MyListCreate } from "./screens/dashboard/MyListCreate";
import { AddNewAddress } from "./screens/dashboard/AddNewAddress";
import { MyListDetails } from "./screens/dashboard/MyListDetails";
import { ProductSinglePage } from "./screens/productSingle";
import { ShopNoSidebarPage } from "./screens/shopNoSidebar";
import { CartGuestPage } from "./screens/cartGuest";
import { CheckoutGiftPage } from "./screens/checkoutGift";
import { CheckoutLoginPage } from "./screens/checkoutLogin";
import { LoginPage } from "./screens/auth/Login";
import { RegistrationPage } from "./screens/auth/Registration";
import { ForgotPasswordPage } from "./screens/auth/ForgotPassword";
import { FaqPage } from "./screens/faq";
import { ComparePage } from "./screens/compare";
import { AboutPage } from "./screens/about";
import { ContactPage } from "./screens/contact";
import { TermsPage } from "./screens/terms";
import { PrivacyPolicyPage } from "./screens/privacy";

const BARE_PAGES = ["/login", "/registration", "/forgot-password"];

function AppRoutes() {
  const location = useLocation();
  const isBarePage = BARE_PAGES.includes(location.pathname);

  return (
    <div className="body_wrapper">
      <Preloader />
      {!isBarePage && <ProductQuickView />}
      {!isBarePage && <Navbar relative={location.pathname !== "/"} />}
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
          <Route path="/add-new-address" element={<AddNewAddress />} />
        </Route>
        <Route path="/order-track" element={<OrderTrack />} />
        <Route path="/order-confrmation" element={<OrderConfirmation />} />
        <Route path="/my-list-create" element={<MyListCreate />} />
        <Route path="/my-list-details" element={<MyListDetails />} />
        <Route path="/product-single" element={<ProductSinglePage />} />
        <Route path="/shop-no-sidebar" element={<ShopNoSidebarPage />} />
        <Route path="/cart-guest" element={<CartGuestPage />} />
        <Route path="/checkout-gift" element={<CheckoutGiftPage />} />
        <Route path="/checkout-login" element={<CheckoutLoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms-condition" element={<TermsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
      {!isBarePage && <Footer />}
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

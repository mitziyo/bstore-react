import { useEffect } from "react";
import { Preloader } from "./components/preloader";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { Footer } from "./components/footer";
import { ProductQuickView } from "./components/modals/ProductQuickView";
import { HomePage } from "./screens/homePage";

function App() {
  useEffect(() => {
    new window.WOW().init();
  }, []);

  return (
    <div className="body_wrapper">
      <Preloader />
      <ProductQuickView />
      <HomeNavbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;

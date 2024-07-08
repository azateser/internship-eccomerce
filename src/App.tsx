import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Auth/Login";
import { ProtectedLayout } from "./components/layout/ProtectedLayout";
import ProductPage from "./pages/Product";
import CartPage from "./pages/Cart";
import AboutPage from "./pages/Static/About";
import ContactPage from "./pages/Static/ContactUs";
import CategoryPage from "./pages/Category";
import FavoritesPage from "./pages/Favorites";
import ProfilePage from "./pages/Profile";
import ShopPage from "./pages/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />

      {/* Product Routes */}
      <Route path="/product/:name/:id" element={<ProductPage />} />

      <Route path="/categories" element={<CategoryPage />} />

      <Route path="/shop" element={<ShopPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedLayout />}>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>

      {/* Static Pages */}
      <Route path="/our-story" element={<AboutPage />} />
      <Route path="/contact-us" element={<ContactPage />} />
    </Routes>
  );
};

export default App;

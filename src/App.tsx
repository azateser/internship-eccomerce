import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Auth/Login";
import { ProtectedLayout } from "./components/layout/ProtectedLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedLayout />}>
        <Route path="/profile" element={<HomePage />} />
        <Route path="/cart" element={<HomePage />} />
        <Route path="/favorites" element={<HomePage />} />
      </Route>

      {/* Static Pages */}
      <Route path="/about" element={<HomePage />} />
      <Route path="/contact" element={<HomePage />} />
    </Routes>
  );
};

export default App;

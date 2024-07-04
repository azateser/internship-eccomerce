import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { useAppDispatch } from "../../services";
import { getCurrentUser } from "../../services/authSlice/api";
import { getCategories } from "../../services/categoriesSlice";
import { loadCart } from "../../services/cartSlice";
import { loadFavorite } from "../../services/favoriteSlice";

const Layout = ({ children }: any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(getCategories({ limit: 12 }));
    dispatch(loadCart());
    dispatch(loadFavorite());
  }
  , [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

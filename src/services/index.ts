import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

import authSlice from "./authSlice";
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";
import favoriteSlice from "./favoriteSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    categories: categoriesSlice,
    products: productsSlice,
    cart: cartSlice,
    favorite: favoriteSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Favorite } from "../../interfaces/favorite";

export interface FavoriteState {
  items: Favorite[];
  loading: boolean;
  error: any;
}

const initialState: FavoriteState = {
  items: [],
  loading: true,
  error: "",
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    loadFavorite: (state) => {
      const favorites = JSON.parse(localStorage.getItem("favorite") || "[]");
      state.items = favorites;
    },
    addToFavorite: (state, action) => {
      toast.success("Item added to favorite");

      const item = action.payload;
      const favorites = JSON.parse(localStorage.getItem("favorite") || "[]");
      let updatedFavorite = favorites.map((item: any) => ({ ...item }));

      const existingItemIndex = updatedFavorite.findIndex(
        (favoriteItem: any) => favoriteItem.id === item.id
      );

      if (existingItemIndex >= 0) {
        updatedFavorite.splice(existingItemIndex, 1);
      } else {
        updatedFavorite.push(item);
      }

      localStorage.setItem("favorite", JSON.stringify(updatedFavorite));
      state.items = updatedFavorite;
    },
    removeFromFavorite: (state, action) => {
      const updatedFavorite = state.items.filter(
        (item) => item.id !== action.payload
      );

      state.items = updatedFavorite;
      localStorage.setItem("favorite", JSON.stringify(updatedFavorite));
      toast.success("Item removed from favorite");
    },
  },
});

export const { addToFavorite, removeFromFavorite, loadFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;

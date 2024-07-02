import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./api";
import { toast } from "react-toastify";
import { Category } from "../../interfaces/category";
export { getCategories };

export interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: any;
}

const initialState: CategoryState = {
  categories: [],
  loading: true,
  error: "",
};

export const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(getCategories.pending, (state) => {
      state.loading = true;
      state.error = "";
    })
    .addCase(getCategories.fulfilled, (state, action) => {
      if (action.payload) {
        if (Array.isArray(action.payload)) {
          state.categories = action.payload;
        } else {
          state.error = "Received payload is not an array";
        }
      }
      state.loading = false;
    })
    .addCase(getCategories.rejected, (state) => {
      state.loading = false;
      state.error = "Error fetching categories data!";
      toast.error("Get categories failed!");
    });
  }
});


export default categoriesSlice.reducer;

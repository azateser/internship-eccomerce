import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductsById, searchProducts } from "./api";
import { toast } from "react-toastify";
import { Product } from "../../interfaces/product";
export { getProducts, getProductsById };

export interface ProductState {
  products: Product[];
  product: Product;
  search: Product[];
  loading: boolean;
  error: any;
}

const initialState: ProductState = {
  products: [],
  product: {} as Product,
  search: [],
  loading: true,
  error: "",
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.error = "";
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      if (action.payload) {
        if (Array.isArray(action.payload)) {
          state.products = action.payload;
        } else {
          state.error = "Received payload is not an array";
        }
      }
      state.loading = false;
    })
    .addCase(getProducts.rejected, (state) => {
      state.loading = false;
      state.error = "Error fetching products";
      toast.error("Get products failed");
    });

    builder
    .addCase(getProductsById.pending, (state) => {
      state.loading = true;
      state.error = "";
    })
    .addCase(getProductsById.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
    })
    .addCase(getProductsById.rejected, (state) => {
      state.loading = false;
      state.error = "Error fetching product";
      toast.error("Get product failed");
    });

    builder
    .addCase(searchProducts.pending, (state) => {
      state.loading = true;
      state.error = "";
    })
    .addCase(searchProducts.fulfilled, (state, action) => {
      if (action.payload) {
        if (Array.isArray(action.payload)) {
          state.search = action.payload;
        } else {
          state.error = "Received payload is not an array";
        }
      }
      state.loading = false;
    })
    .addCase(searchProducts.rejected, (state) => {
      state.loading = false;
      state.error = "Error fetching products";
      toast.error("Search products failed");
    });
    
    
  }
});


export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../interfaces/cart";
import { toast } from "react-toastify";

export interface CartState {
  items: Cart[];
  loading: boolean;
  error: any;
}

const initialState: CartState = {
  items: [],
  loading: true,
  error: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCart: (state) => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      state.items = cart;
    },
    addToCart: (state, action) => {
      toast.success("Item added to cart");
      const item = action.payload;
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      let updatedCart = cart.map((item: any) => ({ ...item }));

      const existingItemIndex = updatedCart.findIndex(
        (cartItem: any) => cartItem.id === item.id
      );

      if (existingItemIndex >= 0) {
        updatedCart[existingItemIndex].quantity += item.quantity || 1;
      } else {
        const newCartItem = { ...item, quantity: item.quantity || 1 };
        updatedCart.push(newCartItem);
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      state.items = updatedCart;
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.items = updatedCart;
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success("Item removed from cart");
    },
    removeAllFromCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
      toast.success("All items removed from cart");
    },
    incrementProductCount: (state, action) => {
      const id = action.payload;
      const updatedCart = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      state.items = updatedCart;
    },
    decrementProductCount: (state, action) => {
      const id = action.payload;
      const updatedCart: Cart[] = state.items.reduce((acc: Cart[], item) => {
        if (item.id === id) {
          const newQuantity = item.quantity - 1;
          if (newQuantity > 0) {
            acc.push({ ...item, quantity: newQuantity });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      state.items = updatedCart;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeAllFromCart,
  loadCart,
  incrementProductCount,
  decrementProductCount,
} = cartSlice.actions;

export default cartSlice.reducer;

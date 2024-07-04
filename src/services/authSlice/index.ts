import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, login } from "./api";
import { User } from "../../interfaces/user";
import { toast } from "react-toastify";
export { login };

export interface AuthState {
  user: User;
  token: string;
  loading: boolean;
  error: any;
}

const initialState: AuthState = {
  user: {} as User,
  token: "",
  loading: true,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.access_token;
      state.loading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
      state.error = "Login Error!";
      toast.error("Login Error!");
    });
    builder.addCase(getCurrentUser.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(getCurrentUser.rejected, (state) => {
      state.loading = false;
      state.error = "Login Error!";
    });
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { HttpRequest, RequestType } from "../../plugins/httpRequest";
import { User } from "../../interfaces/user";

export const login = createAsyncThunk("login", async ({ email, password }: { email: string, password: string }) => {
  const response = await HttpRequest<any, any>({
    url: "auth/login",
    method: RequestType.POST,
    body: {
      email,
      password
    }
  });
  return response;
});

export const getCurrentUser = createAsyncThunk("currenUser", async () => {
  const response = await HttpRequest<any, User>({
    url: "auth/profile",
    method: RequestType.GET,
  });
  return response;
});
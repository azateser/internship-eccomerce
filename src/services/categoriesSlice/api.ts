import { createAsyncThunk } from "@reduxjs/toolkit";
import { HttpRequest, RequestType } from "../../plugins/httpRequest";
import { Category } from "../../interfaces/category";


export const getCategories = createAsyncThunk("getCategories", async ({ limit }: { limit?: number }) => {
  const response = await HttpRequest<any, Category>({
    url: `${limit ? `categories?limit=${limit}` : "categories"}`,
    method: RequestType.GET,
  });
  return response;
});
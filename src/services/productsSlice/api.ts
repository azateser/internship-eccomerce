import { createAsyncThunk } from "@reduxjs/toolkit";
import { HttpRequest, RequestType } from "../../plugins/httpRequest";
import { Product } from "../../interfaces/product";

export const getProducts = createAsyncThunk(
  "getProducts",
  async ({ offset, limit }: { offset?: number; limit?: number }) => {
    const response = await HttpRequest<null, Product>({
      url: `products?offset=${offset}&limit=${limit}`,
      method: RequestType.GET,
    });
    return response;
  }
);

export const getProductsById = createAsyncThunk(
  "getProductsById",
  async (id: number) => {
    const response = await HttpRequest<null, Product>({
      url: `products/${id}`,
      method: RequestType.GET,
    });
    return response;
  }
);

export const searchProducts = createAsyncThunk(
  "searchProducts",
  async ({
    title,
    price,
    price_min,
    price_max,
    categoryId,
  }: {
    title?: string | null;
    price?: number;
    price_min?: number | null;
    price_max?: number | null;
    categoryId?: number | null;
  }) => {
    const response = await HttpRequest<null, Product>({
      url: `products${
        title ? `?title=${title}` : "" ||
        price ? `?price=${price}` : "" ||
        (price_min && price_max ? `?price_min=${price_min}&price_max=${price_max}` : "") ||
        (categoryId ? `?categoryId=${categoryId}` : "")
      }`,
      method: RequestType.GET,
    });
    return response;
  }
);
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
    category,
  }: {
    title?: string;
    price?: number;
    price_min?: number;
    price_max?: number;
    category?: string;
  }) => {
    const response = await HttpRequest<null, Product>({
      url: `products${
        title ? `?title=${title}` : "" ||
        price ? `?price=${price}` : "" ||
        (price_min && price_max ? `?price_min=${price_min}&price_max=${price_max}` : "") ||
        (category ? `?category=${category}` : "")
      }`,
      method: RequestType.GET,
    });
    return response;
  }
);
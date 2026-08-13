import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_APIKEY;
const BASE_URL = import.meta.env.VITE_BASEURL;

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (query = "shoes", { rejectWithValue }) => {
    try {
      if (!API_KEY || !BASE_URL) throw new Error("ENV tidak terbaca");
      const response = await axios.get(BASE_URL, {
        params: { key: API_KEY, q: query, image_type: "photo", order: "popular" },
      });
      return response.data.hits;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch products");
    }
  }
);

export const fetchImages = createAsyncThunk(
  "product/fetchImages",
  async ({ query = "shoes", limit = 4 }, { rejectWithValue }) => {
    try {
      if (!API_KEY || !BASE_URL) throw new Error("ENV tidak terbaca");
      const response = await axios.get(BASE_URL, {
        params: { key: API_KEY, q: query, image_type: "photo", per_page: limit },
      });
      return response.data.hits;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch images");
    }
  }
);

export const fetchProductsByQuery = createAsyncThunk(
  "product/fetchProductsByQuery",
  async (query = "", { rejectWithValue }) => {
    try {
      if (!query) return [];
      if (!API_KEY || !BASE_URL) throw new Error("ENV tidak terbaca");
      const response = await axios.get(BASE_URL, {
        params: { key: API_KEY, q: query, image_type: "photo", order: "popular" },
      });
      return response.data.hits;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch products by query");
    }
  }
);

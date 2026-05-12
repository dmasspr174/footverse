import axios from "axios";

const API_KEY = import.meta.env.VITE_APIKEY;
const BASE_URL = import.meta.env.VITE_BASEURL;

export const getProducts = async (query = "shoes") => {
  try {
    if (!API_KEY || !BASE_URL) {
      throw new Error("ENV tidak terbaca");
    }
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        order: "popular",
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getImages = async (query = "shoes", limit = 4) => {
  try {
    if (!API_KEY || !BASE_URL) {
      throw new Error("ENV tidak terbaca");
    }

    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        per_page: limit,
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getProductsByQuery = async (query = "") => {
  if (!query) return [];
  try {
    if (!API_KEY || !BASE_URL) {
      throw new Error("ENV tidak terbaca");
    }

    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        order: "popular",
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error(`Error fetching products by query "${query}":`, error);
    return [];
  }
};

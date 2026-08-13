import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../action/productAction";

// Inisialisasi state
const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Tambahkan reducer sinkron di sini jika diperlukan
  },
  extraReducers: (builder) => {
    builder
      // Ketika API sedang dipanggil
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // Ketika API berhasil dipanggil
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      // Ketika API gagal dipanggil
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;

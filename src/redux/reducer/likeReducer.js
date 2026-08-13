import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likes: [], // Array of liked product IDs or objects
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const product = action.payload;
      const index = state.likes.findIndex((item) => item.id === product.id);
      
      if (index >= 0) {
        // Jika sudah ada, hapus dari wishlist
        state.likes.splice(index, 1);
      } else {
        // Jika belum ada, tambahkan ke wishlist
        state.likes.push(product);
      }
    },
    clearLikes: (state) => {
      state.likes = [];
    }
  },
});

export const { toggleLike, clearLikes } = likeSlice.actions;
export default likeSlice.reducer;

import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import likeReducer from "./likeReducer";

// Di sini kita menggabungkan state-state apa saja yang digunakan
const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  like: likeReducer,
});

export default rootReducer;

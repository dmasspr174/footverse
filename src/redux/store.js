import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer"; // Secara default akan mengarah ke index.js di dalam folder reducer

// Membuat dan mengkonfigurasi store
const store = configureStore({
  reducer: rootReducer,
  // Redux Toolkit secara otomatis sudah menambahkan redux-thunk sebagai middleware bawaan
});

export default store;

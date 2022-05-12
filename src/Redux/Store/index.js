import { configureStore } from "@reduxjs/toolkit";
import { loadingSlice } from "./loading";
import carts from "./math";

const store = configureStore({
    reducer: {
        loading: loadingSlice.reducer,
        carts: carts.reducer,
    },
});
export { store };
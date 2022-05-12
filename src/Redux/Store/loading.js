import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: "loading",
    initialState: { loading: false },
    reducers: {
        openLoading(state, loading) {
            state.loading = true;
        },
        closeLoading(state, loading) {
            state.loading = false;
        },
    },
});

export const loadingActions = loadingSlice.actions;
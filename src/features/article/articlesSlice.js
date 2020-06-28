import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
    name: 'articles',
    initialState: {
        list: null,
        range: 15,
        page: 0
    },
    reducers: {
        setList: (state, action) => {
            state.list = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
            state.list = null;
        }
    }
});

export const { setList, setPage } = articleSlice.actions;

export default articleSlice.reducer;
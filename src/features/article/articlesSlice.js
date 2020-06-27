import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
    name: 'articles',
    initialState: {
        list: null,
        range: [0, 15]
    },
    reducers: {
        setList: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { setList } = articleSlice.actions;

export default articleSlice.reducer;
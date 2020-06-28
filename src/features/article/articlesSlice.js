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
            action.payload.sort(function(a, b) {
                if (a.title > b.title) {
                    return 1;
                  }
                  if (a.title < b.title) {
                    return -1;
                  }
                  return 0;
              });
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
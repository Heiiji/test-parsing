import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addOne: (state, action) => {
        state.value += action.payload;
    },
    removeOne: (state, action) => {
      state.value = state.value.filter(elem => elem.id !== action.payload);
    }
  },
});

export const { addOne, removeOne } = cartSlice.actions;

export default cartSlice.reducer;

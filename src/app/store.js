import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import articlesReducer from '../features/article/articlesSlice';
import cartReducer from '../features/cart/cartSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    articles: articlesReducer,
    cart: cartReducer
  },
});

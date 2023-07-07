import { configureStore } from '@reduxjs/toolkit';
// import { post_api } from '@/services/postapi';
import { authApi } from '../services/authApi';
import { bookApi } from '../services/bookApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import  userReducer from './slices/userSlice';
import  orderReducer from './slices/orderSlice';
// import commentReducer from './slices/commentSlices';

const store = configureStore({
  reducer: {
    // [post_api.reducerPath]: post_api.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    order: orderReducer,
    userSlice: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware).concat(authApi.middleware)



});

export default store;

// It will enable to refetch the data on certain events, such as refetchOnFocus and refetchOnReconnect.
setupListeners(store.dispatch)


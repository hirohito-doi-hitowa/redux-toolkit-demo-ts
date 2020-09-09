import { configureStore } from '@reduxjs/toolkit';
import likesReducer from './slices/likesSlice';
import commentsReducer from './slices/commentsSlice';
import imageReducer from './slices/imageSlice';

const store = configureStore({
  reducer: {
    likes: likesReducer,
    comments: commentsReducer,
    image: imageReducer,
  },
});

// stateの型情報
export type RootState = ReturnType<typeof store.getState>;

export default store;

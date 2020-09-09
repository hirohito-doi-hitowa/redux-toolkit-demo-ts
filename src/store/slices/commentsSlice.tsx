import { createSlice } from '@reduxjs/toolkit';

// 型定義
export type CommentsState = Array<string>;

// 初期値
const initialState = ['Wow', 'awesome'];

// slice
export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    postComment: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { postComment } = commentsSlice.actions;

export default commentsSlice.reducer;

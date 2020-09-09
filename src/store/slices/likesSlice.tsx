import { createSlice } from '@reduxjs/toolkit';

// 型定義
interface LikesState {
  value: number;
}

// 初期値
const initialState: LikesState = { value: 12 };

// slice
export const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    updateCount: (state) => {
      state.value++;
    },
  },
});

export const { updateCount } = likesSlice.actions;

export default likesSlice.reducer;

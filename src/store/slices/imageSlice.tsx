import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// thunk action
export const fetchImage = createAsyncThunk('image/fetchImage', async (_, { getState }) => {
  const state: any = getState(); // getState()がunkown型を返している
  const characterId = state.image.id + 1;
  const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);

  return await response.json();
});

// 型定義
interface ImageState {
  id: number;
  imageUrl: string;
}

// 初期値
const initialState: ImageState = {
  id: 1,
  imageUrl: `https://rickandmortyapi.com/api/character/avatar/1.jpeg`,
};

// slice
export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Typescriptで型推論を聞かせるために書き方を変える必要があるらしい
    builder.addCase(fetchImage.pending, () => {
      // APIを実行した後、結果が帰ってくるまでに行う処理
    });
    builder.addCase(fetchImage.fulfilled, (state, action) => {
      // 正常終了した際の処理
      const { id, image } = action.payload;
      state.id = id;
      state.imageUrl = image;
      return state;
    });
    builder.addCase(fetchImage.rejected, () => {
      // エラー時の処理
    });
  },
});

export default imageSlice.reducer;

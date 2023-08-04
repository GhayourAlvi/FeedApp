import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch(
    'https://api.thecatapi.com/v1/images/search?limit=50',
  );
  const data = await response.json();
  return data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
    clickedImage: null,
  },
  reducers: {
    setClickedImage: (state, action) => {
      state.clickedImage = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const {setClickedImage} = dataSlice.actions;
export default dataSlice.reducer;

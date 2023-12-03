import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await fetch("https://lucky0011198.github.io/Dynamic-Data-For-Portfolio/Data.json");
  return response.json();
});

const dataSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default dataSlice.reducer;

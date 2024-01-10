import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

export const getSearchVideos = createAsyncThunk("/search", async (search) => {
  console.log(search);
  console.log(search + "hello");
  const data = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=AIzaSyBYjDH_bwUC2aTL7qd8n0v_NmoKolyXRGg`
  );
  const json = await data.json();
  console.log(json.item);
  return json.items;
});

const searchVideoSlice = createSlice({
  name: "searchVideos",
  initialState: {
    searchVideos: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSearchVideos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSearchVideos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchVideos = action.payload;
      })
      .addCase(getSearchVideos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default searchVideoSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { YOUTUBE_VIDEOS_API } from "./constants";

export const getVideos = createAsyncThunk("/", async () => {
  const data = await fetch(YOUTUBE_VIDEOS_API);
  const json = await data.json();
  console.log(json.item);
  return json.items;
});

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVideos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getVideos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.videos = action.payload;
      })
      .addCase(getVideos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default videosSlice.reducer;

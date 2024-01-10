import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videosSlice from "./videosSlice";
import searchSlice from "./searchSlice";
import searchVideoSlice from "./searchVideoSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    videos:videosSlice,
    search:searchSlice,
    searchVideos:searchVideoSlice,
  },
});

export default store;

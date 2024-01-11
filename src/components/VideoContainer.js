import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../utils/videosSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const { videos, status, error } = useSelector((state) => state.videos);

  useEffect(() => {
    // Fetch videos if the status is "idle"
    if (status === "idle") {
      dispatch(getVideos());
    }
  }, [dispatch, status]); // Dependency array includes dispatch and status

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-wrap ">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

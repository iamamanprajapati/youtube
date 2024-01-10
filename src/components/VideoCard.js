import React, { useEffect, useState } from "react";
import { getTimeSinceUpload, getViews } from "../utils/constants";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title } = snippet;
  const [channelInfo, setChannelInfo] = useState([]);

  useEffect(() => {
    getData();
    console.log("useeffect");
  }, []);

  const getData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=${snippet.channelId}&key=AIzaSyAth2pfBQnWSzhYCBgGgs_cXmwonuqz9RY`
    );
    const json = await data.json();
    setChannelInfo(json.items);
  };

  return (
    <div className="videocard  m-2 my-5 w-72">
      <img
        className="rounded-lg w-full"
        src={snippet.thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="flex">
        {channelInfo.map((info) => {
          return (
            <img
              className="h-12 w-12 rounded-full my-2"
              src={info.snippet.thumbnails.high.url}
              alt="profile"
            />
          );
        })}
        <h1 className=" font-semibold line-clamp-2 my-2 mx-2">{title}</h1>
      </div>
      <div className="mx-5 my-2">
        <h1 className="my-2">{channelTitle}</h1>
        <div className="flex">
          <h1>{getViews(statistics.viewCount)} views · </h1>
          <h1 className="mx-3">{getTimeSinceUpload(snippet.publishedAt)}</h1>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

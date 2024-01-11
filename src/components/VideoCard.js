import React, { useEffect, useState } from "react";
import { getTimeSinceUpload, getViews } from "../utils/constants";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title } = snippet;
  const [channelInfo, setChannelInfo] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      try {
        const data = await fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=${snippet.channelId}&key=AIzaSyBYjDH_bwUC2aTL7qd8n0v_NmoKolyXRGg`
        );

        if (!isMounted) {
          return; // Do nothing if the component is unmounted
        }

        const json = await data.json();
        setChannelInfo(json.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();

    return () => {
      // Cleanup function to cancel the fetch request
      isMounted = false;
    };
  }, [snippet.channelId]); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="videocard m-1 my-5 w-72">
      <img
        key={info.id}
        className="rounded-lg w-full"
        src={snippet.thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="flex">
        {channelInfo.map((info) => {
          return (
            <img
              key={info.id}
              className="h-12 w-12 rounded-full my-2"
              src={info.snippet.thumbnails.high.url}
              alt="profile"
            />
          );
        })}
        <h1 className=" font-semibold line-clamp-2 my-2 mx-2">{title}</h1>
      </div>
      <div className="mx-5 my-2">
        <h1 className="my-2 line-clamp-1 text-sm">{channelTitle}</h1>
        <div className="flex">
          <h1 className="text-sm">{getViews(statistics.viewCount)} views · </h1>
          <h1 className="mx-2 line-clamp-1 text-sm">
            {getTimeSinceUpload(snippet.publishedAt)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

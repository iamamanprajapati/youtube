import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchItemCard = () => {
  const data = useSelector((state) => state.searchVideos);
  const videos = data.searchVideos;
  // console.log(data.searchVideos);

  return (
    <div className=" mb-1">
    
      {Array.isArray(videos) &&
        videos.map((item) => {
          return (
            <Link key={item.id} to={"/watch?v="+item.id.videoId}>
            <div className="flex">
              <div className="">
                <img
                
                  className="mb-5 mt-3 mx-3 rounded-md"
                  src={item.snippet.thumbnails.medium.url}
                  alt=""
                />
              </div>
              <div className="w-[300px] mx-10">
                <h1 className="my-3">{item.snippet.title}</h1>
                <h1>{item.snippet.channelTitle}</h1>
              </div>
            </div>
            </Link>
          );
        })}
        
    </div>
  );
};

export default SearchItemCard;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { getSearchVideos } from "../utils/searchVideoSlice";
import { YOUTUBE_SEARCH_SUGESSION_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGESSION_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearchButton = () => {
    dispatch(getSearchVideos(searchQuery));
  };

  const handleQuerySearch = (search) => {
    dispatch(getSearchVideos(search));
    setShowSuggestion(false);
    setSearchQuery(search);
  };

  const handleSearch = (e) => {
    setSearchQuery(e);
    setShowSuggestion(true);
  };

  return (
    <div className="fixed top-0 w-full bg-white p-4 z-20">
      <div className="grid grid-flow-col">
        <div className="flex col-span-3">
          <img
            onClick={toggleMenuHandler}
            className="h-7 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            alt="menu"
          />
          <img
            className="h-7 ml-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmpwHWnDD-hiyW5Y65Z2LrBUaFivxyDPzyuz1BjgFb5tWawaD7k5esrSitG-3nV8aHDU&usqp=CAU"
            alt="logo"
          />
        </div>
        <div className="col-span-8">
          <div>
            <input
              className="input-text  w-1/2 h-[40px] border border-gray-300 p-5 rounded-l-full"
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Link to="/search">
              <button
                onClick={handleSearchButton}
                className="border h-[40px] border-gray-600 rounded-r-full bg-gray-200 w-20"
              >
                🔍
              </button>
            </Link>
          </div>
          <div className="fixed bg-white rounded-l-lg w-1/3 mt-1">
            <ul className="">
              {!showSuggestion
                ? null
                : suggestion.map((list) => {
                    return (
                      <Link
                        to="/search"
                        onClick={() => handleQuerySearch(list)}
                      >
                        <span className="flex border-b w-full">
                          <span className="px-3 py-1">🔍</span>
                          <li className="px-3 py-1 " key={list}>
                            {list}
                          </li>
                        </span>
                      </Link>
                    );
                  })}
            </ul>
          </div>
        </div>
        <div className="col-span-1">
          <img
            className="h-10"
            src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
            alt="user"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { setItemSearch } from "../utils/searchSlice";
import { getSearchVideos } from "../utils/searchVideoSlice";

const Head = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = () => {
    dispatch(setItemSearch(search));
    dispatch(getSearchVideos(search));
  };

  return (
    <div className="fixed top-0 w-full bg-white p-4 z-20">
      <div className="grid grid-flow-col">
        <div className="flex col-span-1">
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
        <div className="col-span-10 text-center">
          <input
            className="input-text w-1/2 h-[40px] border border-gray-300 p-1 rounded-l-full"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to="/search">
            <button
              onClick={handleSearch}
              className="border h-[40px] border-gray-600 rounded-r-full bg-gray-200 w-20"
            >
              🔍
            </button>
          </Link>
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

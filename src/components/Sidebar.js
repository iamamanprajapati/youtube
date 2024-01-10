import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { homelist, explore, subscription, yourlist } from "../utils/constants";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return pattern
  if (!isMenuOpen) return null;

  return (
    <div
      className={`scrollbar-hide fixed p-2 h-full w-60 overflow-y-auto transition-opacity duration-300 ${
        isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ul>
        {homelist.map((list, index) => {
          return (
            <Link key={index}>
              <li className="px-5 text-base py-2 w-50 bg-gray-50 m-2 rounded-md flex justify-start hover:bg-gray-200">
                <FontAwesomeIcon
                  className="self-center size-7"
                  icon={list.logo}
                />{" "}
                <span className="ml-5 font-extralight">{list.title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
      <h1 className="font-bold pt-5">You</h1>
      <ul>
        {yourlist.map((list, index) => {
          return (
            <Link key={index}>
              <li className="px-5 py-2 w-50 bg-gray-50 m-2 rounded-md flex justify-start hover:bg-gray-200">
                <FontAwesomeIcon className="self-center size-7" 
                   icon={list.logo}
                />{" "}
                <div className="line-clamp-1">
                  <span className="ml-5 font-extralight"></span>
                  {list.title}
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        {subscription.map((list, index) => {
          return (
            <Link key={index}>
              <li className="px-5 py-2 w-50 bg-gray-50 m-2 rounded-md flex justify-start hover:bg-gray-200">
                <FontAwesomeIcon
                  className="self-center size-7"
                  icon={list.logo}
                />{" "}
                <span className="ml-5 font-extralight"></span>
                {list.title}
              </li>
            </Link>
          );
        })}
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        {explore.map((list, index) => {
          return (
            <Link key={index}>
              <li className="px-5 text-base py-2 w-50 bg-gray-50 m-2 rounded-md flex justify-start hover:bg-gray-200">
                <FontAwesomeIcon
                  className="self-center size-7"
                  icon={list.logo}
                />{" "}
                <span className="ml-5 font-extralight size-min"></span>
                {list.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

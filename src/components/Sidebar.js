import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHistory,
  faVideo,
  faClock,
  faUserCircle,
  faArrowTrendUp,
  faMusic,
  faFilm,
  faSignal,
  faSailboat,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";

const homelist = [
  {
    logo: faHouse,
    title: "Home",
  },
  {
    logo: faVideoCamera,
    title: "Shorts",
  },
  {
    logo: faSailboat,
    title: "Subscriptions",
  },
];
const yourlist = [
  {
    logo: faHouse,
    title: "Your Channel",
  },
  {
    logo: faHistory,
    title: "History",
  },
  {
    logo: faVideo,
    title: "Your Videos",
  },
  {
    logo: faClock,
    title: "Watch Later",
  },
];
const subscription = [
  {
    logo: faUserCircle,
    title: "Aman Wilson",
  },
  {
    logo: faUserCircle,
    title: "ZemTV",
  },
  {
    logo: faUserCircle,
    title: "EduPoint",
  },
  {
    logo: faUserCircle,
    title: "MrBeast",
  },
];

const explore = [
  {
    logo: faArrowTrendUp,
    title: "Trending",
  },
  {
    logo: faMusic,
    title: "Music",
  },
  {
    logo: faFilm,
    title: "Movies",
  },
  {
    logo: faSignal,
    title: "Live",
  },
];
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className={`scrollbar-hide fixed p-3 h-full w-64 overflow-y-auto transition-transform duration-300 transform ${
      isMenuOpen ? 'translate-x-0' : '-translate-x-full' }`}
      >
      <ul>
        {homelist.map((list) => {
          return (
            <Link>
              <li className="px-5 py-2 w-60 bg-gray-50 m-2 rounded-md flex justify-start hover:bg-gray-200">
                <FontAwesomeIcon
                  className="self-center size-7"
                  icon={list.logo}
                />{" "}
                <span className="ml-5">{list.title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
      <h1 className="font-bold pt-5">You</h1>
      <ul>
        {yourlist.map((list) => {
          return (
            <Link>
              <li className="px-5 py-2 w-60 bg-gray-50 m-2 rounded-md flex justify-start hover:bg-gray-200">
                <FontAwesomeIcon
                  className="self-center size-7"
                  icon={list.logo}
                />{" "}
                <div className="line-clamp-1">
                  <span className="ml-5"></span>
                  {list.title}
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        {subscription.map((list) => {
          return (
            <Link>
              <li className="px-5 py-2 w-60 bg-gray-50 m-2 rounded-md flex justify-start hover:bg-gray-200">
                <FontAwesomeIcon
                  className="self-center size-7"
                  icon={list.logo}
                />{" "}
                <span className="ml-5"></span>
                {list.title}
              </li>
            </Link>
          );
        })}
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        {explore.map((list) => {
          return (
            <Link>
              <li className="px-5 py-2 bg-gray-50 m-2 rounded-md flex justify-start hover:bg-gray-200">
                <FontAwesomeIcon
                  className="self-center size-7"
                  icon={list.logo}
                />{" "}
                <span className="ml-5"></span>
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
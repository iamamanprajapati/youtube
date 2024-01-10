import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={`flex-1 overflow-x-hidden overflow-y-auto transition-all duration-300 z-10 ${
      isMenuOpen ? ' ml-64 transition-delay-300' : 'ml-0'
    }`}>
        <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

import React from "react";
import { useSelector } from "react-redux";
import SearchItemCard from "./SearchItemCard";
import ButtonList from "./ButtonList";

const SearchItemContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`flex-1 overflow-x-hidden overflow-y-auto transition-all duration-300 z-10 ${
        isMenuOpen ? " ml-64 transition-delay-300" : "ml-0"
      }`}
    >
      <ButtonList />
      <SearchItemCard/>
    </div>
  );
};

export default SearchItemContainer;

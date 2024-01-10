import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Live",
  "Music",
  "Cricket",
  "Soccer",
  "Football",
  "News",
  "Gaming",
  "Live",
  "Music",
  "Cricket",
  "News",
  "Gaming",
  "Live",
  "Music",
  "Cricket",
];

const ButtonList = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap buttonlist grid grid-cols-1 scrollbar-hide">
      <div className="flex space-x-2">
        {list.map((element, index) => {
          return <Button key={index} name={element} />;
        })}
      </div>
    </div>
  );
};

export default ButtonList;

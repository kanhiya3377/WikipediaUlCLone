import React from "react";
import Leftsidebar from "./Leftsidebar";
import Rightsidebar from "./Rightsidebar";
import MainContent from "./MainContent";

const MainBar = () => {
  return (
    <div className="flex w-[90%]">
      <Leftsidebar  />
      <MainContent />
      <Rightsidebar />
    </div>
  );
};

export default MainBar;

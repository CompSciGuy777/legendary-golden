import React from "react";
import NavigationBar from "./navigationbar";

const Header = title => {
  return (
    <div className="header">
      <NavigationBar />
      <h1 className={title.className}>{title.title}</h1>
    </div>
  );
};

export default Header;

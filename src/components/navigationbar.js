import React from "react";
import { Links } from "../constants/NavigationLinks";
import { Link } from "gatsby";

const Linklist = () => {
  return Links.map(link => {
    return (
      <div className={link.linkContainerClassName}>
        <button className={link.buttonClassName}>
          <Link to={link.src} className={link.linkClassName}>
            {link.name}
          </Link>
        </button>
      </div>
    );
  });
};

const NavigationBar = () => {
  return (
    <div className={"navigation-bar"}>
      <Linklist />
    </div>
  );
};

export default NavigationBar;

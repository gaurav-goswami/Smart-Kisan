import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";

const SubLink = ({ name, path, isOpen }) => {
  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <Link to={path}>
      <li
        className={`list-none p-2 my-3 rounded-lg cursor-pointer font-semibold ${
          isOpen ? "" : "w-0 opacity-0 p-0 hidden"
        } transition-all duration-150 ease-in-out hover:bg-[#4ba762] hover:text-white ${
          matchRoute(path) ? "bg-[#4ba762] text-white" : ""
        }`}
      >
        {name}
      </li>
    </Link>
  );
};

export default SubLink;

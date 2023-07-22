import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon, title, path }) => {
  return (
    <>
      <Link to={path}>
        <div className="max-[370px]:w-[240px]  w-[350px] md:w-[280px] p-2 h-[170px] bg-[#49a760] transition-all duration-150 ease-linear hover:bg-[#f7c35f] flex flex-col items-center justify-center gap-4 rounded-lg cursor-pointer">
          <div className="w-[50px] h-[50px]">
            <img src={icon} alt="icon" className="w-full h-full object-cover object-center"/>
          </div>

          <div className="font-semibold">{title}</div>
        </div>
      </Link>
    </>
  );
};

export default FeatureCard;

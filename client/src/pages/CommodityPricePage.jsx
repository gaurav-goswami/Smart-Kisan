import React, { useState } from "react";
import MainWrapper from "../Wrapper/MainWrapper";
import CommodityDropDown from "../components/Commodity/CommodityDropDown";
import CommoditySearchResult from "../components/Commodity/CommoditySearchResult";

const CommodityPricePage = () => {
  return (
    <>
      <MainWrapper>
        <div className="w-[100%] md:w-[90%] xl:w-[1300px] min-h-screen mx-auto flex flex-col gap-3 p-2">
          {/* dropdown */}

          <CommodityDropDown />

          {/* actual data */}
          <CommoditySearchResult />

        </div>
      </MainWrapper>
    </>
  );
};

export default CommodityPricePage;

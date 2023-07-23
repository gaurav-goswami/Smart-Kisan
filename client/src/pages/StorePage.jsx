import React from "react";
import MainWrapper from "../Wrapper/MainWrapper";
import StoreCard from "../components/Cards/StoreCard";
import storeData from "../data/storeData";

const StorePage = () => {
  return (
    <>
      <MainWrapper>
        <div className="w-[95%] md:w-[70%] xl:w-[1200px] p-2 min-h-screen mx-auto flex flex-col gap-4">
          <h2 className="text-center text-3xl">Farmer Store</h2>

          <div className="w-[100%] flex flex-wrap gap-4 justify-center p-2">
            {storeData.map((item, index) => {
              return <StoreCard {...item} key={index} />;
            })}
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default StorePage;

import React, { useState } from "react";
import MainWrapper from "../Wrapper/MainWrapper";
import commodity from "../data/Commodity/CommodityData";
import data from "../data/Commodity/dropDownData";

const CommodityPricePage = () => {
  const [commodityData, setCommodityData] = useState({
    commodityName: "",
    state: "",
    district: "",
    market: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommodityData({ ...commodityData, [name]: value });
  };

  return (
    <>
      <MainWrapper>
        <div className="w-[100%] md:w-[85%] xl:w-[1300px] min-h-screen bg-yellow-500 mx-auto flex flex-col gap-3 p-2">
          <div className="flex flex-col gap-4 flex-wrap">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
              Select Options
            </h2>
            {/* dropdown */}
            <div className="flex items-center gap-2 flex-col md:flex-row md:justify-evenly">
              <select
                name="commodityName"
                className="w-[70%] md:w-[20%] p-3 rounded-md"
                value={commodityData.commodityName}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select a commodity
                </option>
                {commodity.map((item, index) => {
                  return (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  );
                })}
              </select>

              <select
                name="state"
                className="w-[70%] md:w-[20%] p-3 rounded-md"
                value={commodityData.state}
                onChange={handleChange}
              >
                <option value="">Select state</option>
                {[
                  ...new Set(
                    data
                      .filter(
                        (item) => item.commodity === commodityData.commodityName
                      )
                      .map((item) => item.state)
                  ),
                ]
                  // using the spread operator to convert the Set object to an array and then map over it
                  .map((value, index) => {
                    return (
                      <option value={value} key={index}>
                        {value}
                      </option>
                    );
                  })}
              </select>

              <select
                name="district"
                className="w-[70%] md:w-[20%] p-3 rounded-md"
                value={commodityData.district}
                onChange={handleChange}
              >
                <option value="">Select a district</option>
                {[
                  ...new Set(
                    data
                      .filter((item) => item.state === commodityData.state)
                      .map((item) => item.district)
                  ),
                ]
                  // using the spread operator to convert the Set object to an array and then map over it
                  .map((value, index) => {
                    return (
                      <option value={value} key={index}>
                        {value}
                      </option>
                    );
                  })}
              </select>

              <select
                name="market"
                className="w-[70%] md:w-[20%] p-3 rounded-md"
                value={commodityData.market}
                onChange={handleChange}
              >
                <option value="">Select a market</option>
                {[
                  ...new Set(
                    data
                      .filter((item) => item.district === commodityData.district)
                      .map((item) => item.market)
                  ),
                ]
                  // using the spread operator to convert the Set object to an array and then map over it
                  .map((value, index) => {
                    return (
                      <option value={value} key={index}>
                        {value}
                      </option>
                    );
                  })}
              </select>
              <button className="w-[70%] md:w-[20%] font-semibold bg-green-400 p-3 rounded-md">
                Search
              </button>
            </div>
          </div>

          {/* data */}
        </div>
      </MainWrapper>
    </>
  );
};

export default CommodityPricePage;

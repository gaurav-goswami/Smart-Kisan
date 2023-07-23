import React, { useState } from "react";
import commodity from "../../data/Commodity/CommodityData";
import data from "../../data/Commodity/dropDownData";
import { setDetails, setLoading } from "../../app/features/CommoditySlice";
import { useDispatch } from "react-redux";


const CommodityDropDown = () => {
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

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setDetails({
        commodityName: commodityData.commodityName,
        state: commodityData.state,
        district: commodityData.district,
        market: commodityData.market,
      }),
      );
      dispatch(setLoading(true));
  };

  return (
    <>
      <div className="flex flex-col gap-4 flex-wrap">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          Select Options
        </h2>
        {/* dropdown */}
        <form className="flex items-center gap-2 flex-col md:flex-row md:justify-evenly" onSubmit={handleSubmit}>
        
            <select
              name="commodityName"
              className="w-[70%] md:w-[45%] p-3 rounded-md bg-green-200 cursor-pointer"
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
              className="w-[70%] md:w-[45%] p-3 rounded-md bg-green-200 cursor-pointer"
              value={commodityData.state}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select state
              </option>
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

            <button className="w-[70%] md:w-[20%] font-semibold bg-green-400 p-3 rounded-md text-white" type="submit">
              Search
            </button>
        
        </form>
      </div>
    </>
  );
};

export default CommodityDropDown;

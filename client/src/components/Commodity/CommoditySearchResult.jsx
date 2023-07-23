import React from "react";
import CommodityTable from "./CommodityTable";

const CommoditySearchResult = () => {

  return (
    <>
      <div className="w-full h-[550px] rounded-md overflow-y-scroll my-4">
        <table className="w-[100%] flex flex-col justify-evenly overflow-y-hidden overflow-x-scroll flex-wrap">
          <thead>
            <tr className="w-[100%] flex justify-between">
              <th className="w-[200px] px-2 py-4 bg-green-400 font-semibold sticky left-0">
                Commodity
              </th>
              <th className="w-[200px] px-2 py-4 bg-green-400 font-semibold">
                Variety
              </th>
              <th className="w-[200px] px-2 py-4 bg-green-400 font-semibold">
                State
              </th>
              <th className="w-[200px] px-2 py-4 bg-green-400 font-semibold">
                District
              </th>
              <th className="w-[200px] px-2 py-4 bg-green-400 font-semibold">
                Market
              </th>
              <th className="w-[200px] px-2 py-4 bg-green-400 font-semibold">
                Arrival Date
              </th>
              <th className="w-[200px] px-2 py-4 bg-green-400 font-semibold">
                Min Price
              </th>
              <th className="w-[200px] px-2 py-4 bg-green-400 font-semibold">
                Avg Price
              </th>
              <th className="w-[200px] px-2 py-4 bg-green-400 font-semibold">
                Max Price
              </th>
            </tr>
          </thead>

          <tbody>
            <CommodityTable />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CommoditySearchResult;

import React, { useEffect, useState } from "react";
import {useSelector } from "react-redux";
import "./Loading.css";
import axios from "axios";

const CommodityTable = () => {
  let { commodityDetails} = useSelector(
    (state) => state.commodityDetails
  );

  const [data, setData] = useState([]);

  const getCommodityData = async (commodityName , state) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/commodity/daily-commodity-rates/${commodityName}/${state}` , {
        withCredentials : true,
        params : {
          commodityName,
          state,
        }
      });
      return response;
    } catch (error) {
      console.log("error in commodity api", error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCommodityData(commodityDetails.commodityName , commodityDetails.state);
      setData(response);
    };

    fetchData()
    return () => {
      null
    }
  }, [commodityDetails]);

  return (
    <>
      {data?.data?.result?.count === 0 ? null : data?.data?.result?.records.length === 0 ? (
        <p>No results</p>
      ) : (
        <>
          {data?.data?.result?.records.map((item, index) => {
            return (
              <tr
                className="w-[100%] flex justify-between bg-gray-100"
                key={index}
              >
                <td className="w-[200px] px-2 py-4 bg-white z-10 text-center font-semibold sticky left-0">
                  {item.commodity}
                </td>
                <td className="w-[200px] px-2 py-4 font-md text-center">
                  {item.grade}
                </td>
                <td className="w-[200px] px-2 py-4 font-md text-center">
                  {item.state}
                </td>
                <td className="w-[200px] px-2 py-4 font-md text-center">
                  {item.district}
                </td>
                <td className="w-[200px] px-2 py-4 font-md text-center">
                  {item.market}
                </td>
                <td className="w-[200px] px-2 py-4 font-md text-center">
                  {item.arrival_date}
                </td>
                <td className="w-[200px] px-2 py-4 font-md text-center">
                  {item.min_price} Rs/Quintal
                </td>
                <td className="w-[200px] px-2 py-4 font-md text-center">
                  {item.modal_price} Rs/Quintal
                </td>
                <td className="w-[200px] px-2 py-4 font-md text-center">
                  {item.max_price} Rs/Quintal
                </td>
              </tr>
            );
          })}
        </>
      )}
    </>
  );
};

export default CommodityTable;

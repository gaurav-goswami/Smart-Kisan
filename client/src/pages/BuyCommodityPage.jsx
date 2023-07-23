import React, { useEffect, useState } from "react";
import MainWrapper from "../Wrapper/MainWrapper";
import axios from "axios";
import { toast } from "react-hot-toast";
import ProductCard from "../components/Cards/ProductCard";

const BuyCommodityPage = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const searchProduct = async (query) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_SERVER_URL
        }/product/search-commodity/${query}`,
        {
          params: {
            query,
          },
        }
      );
      return response;
    } catch (error) {
      console.log("error in buy commodity api", error.message);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Loading...")

    try {

      const response = await searchProduct(query);
      setData(response);

    } catch (error) {
      console.log("Error in handle search" , error.message);
    }
    
    setLoading(false);
    toast.dismiss(toastId);
    setQuery("");
  };


  console.log(data);

  return (
    <>
      <MainWrapper>
        <div className="w-[95%] md:w-[70%] xl:w-[1200px] min-h-screen p-4 mx-auto my-2 flex flex-col gap-8">
          <form className="flex gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search Commodity"
              className="w-[100%] py-3 px-4 outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold"
            >
              Search
            </button>
          </form>

          <div className="w-[100%] flex flex-wrap gap-4 p-6">
            {loading ? <p className="text-center w-full">Loading...</p> :

            (
              <>
                {
                  data?.data?.commodity.map((item, index) => {
                    return <ProductCard {...item} key={index}/>
                  })
                }
              </>
            )
          }
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default BuyCommodityPage;

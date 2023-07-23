import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const commodityApi = createApi({
    reducerPath : "commodityApi",
    baseQuery : fetchBaseQuery({
        baseUrl : import.meta.env.VITE_REACT_APP_SERVER_URL
    }),
    endpoints : (builder) => ({

        // get daily commodity prices
        getDailyPrice : builder.query({
            query : (commodityDetails) => ({
                url : "/commodity/daily-commodity-rates",
                method : "GET",
                headers:  {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(commodityDetails),
                credentials : "include"
            })
        })

    })
})

export default commodityApi;
export const {useGetDailyPriceQuery} = commodityApi;
import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const ProductApi = createApi({
    reducerPath : "ProductApi",
    baseQuery : fetchBaseQuery({
        baseUrl : import.meta.env.VITE_REACT_APP_SERVER_URL
    }),
    endpoints : (builder) => ({

        // create product

        createProduct : builder.mutation({
            query : (productDetails) => ({
                url : "/product/create-commodity",
                method : "POST",
                body : productDetails,
                credentials : "include"
            })
        }),

        getFarmerProduct : builder.query({
            query : () => ({
                url : "/product/my-products",
                method : "GET",
                credentials : "include"
            })
        }),

        // product details

        getProductDetails : builder.query({
            query : ({product_id}) => ({
                url : `/commodity-detail/${product_id}`,
                method : "GET",
                params : {
                    product_id
                },
            })
        })
        
        

    })
})

export default ProductApi
export const {useCreateProductMutation, useSearchProductQuery, useGetProductDetailsQuery, useGetFarmerProductQuery} = ProductApi
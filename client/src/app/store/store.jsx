import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/dist/query";

import authSlice from "../features/Auth";
import userSlice from "../features/UserDetails";


import AuthApi from "../../services/AuthApi";
import commodityApi from "../../services/CommodityApi";

const store = configureStore({

    reducer : {
        auth : authSlice,
        userDetails : userSlice,
        [AuthApi.reducerPath] : AuthApi.reducer,
        [commodityApi.reducerPath] : commodityApi.reducer,
    },

    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat([AuthApi.middleware, commodityApi.middleware])

})

setupListeners(store.dispatch);
export default store;
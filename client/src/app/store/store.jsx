import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/dist/query";

import authSlice from "../features/Auth";
import userSlice from "../features/UserDetails";


import AuthApi from "../../services/AuthApi";

const store = configureStore({

    reducer : {
        auth : authSlice,
        userDetails : userSlice,
        [AuthApi.reducerPath] : AuthApi.reducer,
    },

    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat([AuthApi.middleware])

})

setupListeners(store.dispatch);
export default store;
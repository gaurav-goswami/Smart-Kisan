import { createSlice } from "@reduxjs/toolkit";

export const commoditySlice = createSlice({
    name : "commoditySlice",
    initialState : {
        loading : false,
        commodityDetails : {
            commodityName: "",
            state : "",
        }
    },

    reducers : {
        setDetails : (state, action) => {
            state.commodityDetails = action.payload
        },
        setLoading : (state, action) => {
            state.loading = action.payload
        }
    }
})

export const {setDetails, setLoading} = commoditySlice.actions;

export default commoditySlice.reducer;
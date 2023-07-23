import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : "userSlice",
    initialState : {
        details : null
    },

    reducers : {
        setDetails : (state, action) => {
            state.details = action.payload
        }
    }
})

export const {setDetails} = userSlice.actions;

export default userSlice.reducer;
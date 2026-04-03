import { createSlice } from "@reduxjs/toolkit";

export const countingSlice = createSlice({
    name:"counts",
    initialState:{count:0},
    reducers:{
        increment:(state,action)=>{
            state.count+=action.payload},
        decrement:(state,action)=>
            {state.count-=action.payload}
    }
})

export const{increment,decrement} = countingSlice.actions
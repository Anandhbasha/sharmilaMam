import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItem:[]
}
const cartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addtoCart:(state,action)=>{state.cartItem.push(action.payload)}
    }
})

export const {addtoCart} = cartSlice.actions
export default cartSlice
import CartSlice from "../Slices.js/CartSlice";
import { ProductSlice } from "../Slices.js/Productslice";
import AuthSlice from "../Slices.js/AuthSlice"
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
    reducer:{
        
        Product:ProductSlice.reducer,
        Cart:CartSlice.reducer,
        Auth:AuthSlice.reducer
    }
})

export default Store
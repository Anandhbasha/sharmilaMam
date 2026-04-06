import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
    reducer:{
        Product:productReducer,
        Cart:cartReducer,
        Auth:authReducer
    }
})

export default Store
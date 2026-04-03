import { configureStore } from "@reduxjs/toolkit"
import { countingSlice } from "./Slice"

const Store = configureStore({
    reducer:{
        add:countingSlice.reducer
    }
})

export default Store
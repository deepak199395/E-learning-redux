import { configureStore } from "@reduxjs/toolkit";
import MyProductReducer from "../NewRedux/MyproductSlice";
import myCartReducer from "../NewRedux/MyCartSlice"
export const mystore=configureStore({
    reducer:{
        product:MyProductReducer,
        cart:myCartReducer,
    }
})
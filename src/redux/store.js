import { configureStore } from "@reduxjs/toolkit";

import stepSlice from "./stepSlice";

export const store = configureStore({
    reducer:{
        np:stepSlice
    }
})
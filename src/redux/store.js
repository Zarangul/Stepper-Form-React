import { configureStore } from "@reduxjs/toolkit";

import stepSlice from "./stepSlice";
import formDataSlice from "./formDataSlice";

export const store = configureStore({
    reducer:{
        np:stepSlice,
        form:formDataSlice
    }
})
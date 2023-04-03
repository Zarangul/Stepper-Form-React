import {createSlice} from '@reduxjs/toolkit';

const stepSlice = createSlice({
    name: "step",
    initialState:{
        step:1
    },
    reducers:{
        changeStep:(state,action)=>{
            state.step = action.payload;
        }
    }
});

export default stepSlice.reducer;
export const {changeStep} = stepSlice.actions;

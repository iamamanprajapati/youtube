import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search:""
    },
    reducers:{
        setItemSearch : (state,action)=>{
            state.search = action.payload
        },
    }
})

export const {setItemSearch} = searchSlice.actions;

export default searchSlice.reducer
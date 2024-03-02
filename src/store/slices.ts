import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";


const Slices = {
    userSlice: createSlice({
        name: 'user',
        initialState: 'user Details',
        reducers: reducers.user
    }),
    user2Slice: createSlice({
        name: 'user2',
        initialState: {},
        reducers: {}
    })
};

let allSlices: any = {};
let allActions: any = {}

Object.keys(Slices).forEach(slice => {
    allSlices = { ...allSlices, [slice]: (Slices as any)?.[slice] };
    allActions = { ...allActions, ...((Slices as any)?.[slice]).actions }
});


export { allActions }
export default allSlices;

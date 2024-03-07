import {createSlice} from "@reduxjs/toolkit";

const initialState = {

}

const charSlice = createSlice({
    name:"charSlice",
    initialState,
    reducers:{

    }
})

const {reducer:charReducer,actions } = charSlice

const charAction = {...actions}

export {
    charReducer,
    charAction
}
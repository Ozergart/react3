import {createSlice} from "@reduxjs/toolkit";

const initialState = {

}

const episodeSlice = createSlice({
    name: "episodeSlice",
    initialState,
    reducers:{

    }
})

const {reducer:episodeReducer,actions} = episodeSlice

const episodeAction = {...actions}
export {
    episodeAction,
    episodeReducer
}
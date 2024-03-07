import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    episodeName:""
}

const episodeSlice = createSlice({
    name: "episodeSlice",
    initialState,
    reducers:{
        setEpisodeName:()=>{

        }
    }
})

const {reducer:episodeReducer,actions} = episodeSlice

const episodeAction = {...actions}
export {
    episodeAction,
    episodeReducer
}
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    episodeName:""
}

const episodeSlice = createSlice({
    name: "episodeSlice",
    initialState,
    reducers:{
        setEpisodeName:(state, actions )=>{
            state.episodeName = actions.payload
        }
    }
})
const getAll = createAsyncThunk({

})
const {reducer:episodeReducer,actions} = episodeSlice

const episodeAction = {...actions}
export {
    episodeAction,
    episodeReducer
}
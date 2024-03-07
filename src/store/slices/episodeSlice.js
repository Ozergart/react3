import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState = {
    episodeName:"",
    allEpisodes:[]
}
const getAll = createAsyncThunk(
    "episodeSlice/getAll",
    async ({page},thunkAPI)=>{
        try {
            return episodeService.getAll(page)

        }catch (e){

        }
    }
)
const episodeSlice = createSlice({
    name: "episodeSlice",
    initialState,
    reducers:{
        setEpisodeName:(state, actions )=>{
            state.episodeName = actions.payload
        }
    },
    extraReducers:builder => builder
        .addCase


})

const {reducer:episodeReducer,actions} = episodeSlice

const episodeAction = {...actions}
export {
    episodeAction,
    episodeReducer
}
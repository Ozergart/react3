import {createAsyncThunk, createSlice, isPending} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState = {
    episodeName:"",
    allEpisodes:[],
    loading:false,
    error:null
}
const getAll = createAsyncThunk(
    "episodeSlice/getAll",
    async ({page},thunkAPI)=>{
        try {
            return episodeService.getAll(page)
        }catch (e){
            thunkAPI.rejectWithValue(e.data)
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
        .addCase(getAll.fulfilled,(state, action) => {
            state.allEpisodes = action.payload
            state.loading = false
        })
        .addMatcher(isPending,getAll)


})

const {reducer:episodeReducer,actions} = episodeSlice

const episodeAction = {...actions}
export {
    episodeAction,
    episodeReducer
}
import {createAsyncThunk, createSlice, isPending, isRejected} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState = {
    episodeName: "",
    allEpisodes: [],
    loading: false,
    error: null,
    prevNext:{prev:null,next:null}
}
const getAll = createAsyncThunk(
    "episodeSlice/getAll",
    async (page, thunkAPI) => {
        try {
            return episodeService.getAll()
        } catch (e) {
            thunkAPI.rejectWithValue(e.data)
        }
    }
)
const episodeSlice = createSlice({
    name: "episodeSlice",
    initialState,
    reducers: {
        setEpisodeName: (state, actions) => {
            state.episodeName = actions.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.allEpisodes = action.payload.results
            state.prevNext.prev = action.payload.info.prev
            state.prevNext.next = action.payload.info.next
            state.loading = false
        })
        .addMatcher(isPending(getAll), state => {
            state.loading = true
        })
        .addMatcher(isRejected(getAll), (state, action) => {
                state.error = action.payload
            }
        )


})

const {reducer: episodeReducer, actions} = episodeSlice

const episodeAction = {...actions, getAll}
export {
    episodeAction,
    episodeReducer
}
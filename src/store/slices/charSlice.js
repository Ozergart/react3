import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {charService} from "../../services";

const initialState = {
    chars:[],

}
const charsByIds = createAsyncThunk(
    'charSlice/charsByIds',
    async ({charMassive},thunkAPI)=>{
        try {
            const {data} = await charService.byIds(charMassive)
            return data
        }catch (e){
            return  thunkAPI.rejectWithValue(e.data)
        }
    }
)
const charSlice = createSlice({
    name:"charSlice",
    initialState,
    reducers:{

    },
    extraReducers:builder => builder
        .addCase(charsByIds.fulfilled, (state, action) => {
            state.chars = action.payload
            console.log(action.payload);
        })
})

const {reducer:charReducer,actions } = charSlice

const charAction = {...actions, charsByIds}

export {
    charReducer,
    charAction
}
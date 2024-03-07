import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    chars:[],

}
const charsByIds = createAsyncThunk(
    'charSlice/charsByIds',
    async ({charMassive},thunkAPI)=>{
        try {
            const {data} = charsByIds(charMassive)
            return data

        }catch (e){
            thunkAPI.rejectWithValue(e.data)
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
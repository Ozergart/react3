import {carService} from "../../services/carService";
import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";


const initialState = {
    cars: [],
    trigger: false,
    carForUpdate: null,
    loading: null,
    error: null
}
const getAll = createAsyncThunk(
    "carSlice/getAll",
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            const {data} = await carService.create(car);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const update = createAsyncThunk(
    'carSlice/update',
    async ({id ,car}, thunkAPI) => {
        try {
            const {data} = await carService.update(id, car);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response)
        }
    }
)
const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async (id, thunkAPI) => {
        try {
            await carService.delete(id)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response)
        }
    }
)
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        changeTrigger: (state) => {
            state.trigger = !state.trigger;
        },
        setCarUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload
            state.loading = false
        })
        .addCase(create.fulfilled, state => {
            state.trigger = !state.trigger
        })
        .addCase(update.fulfilled, state => {
            state.trigger=!state.trigger
            state.carForUpdate = null
        })
        .addCase(deleteCar.fulfilled, state => {
            state.trigger = !state.trigger
        })
        .addMatcher(isFulfilled(getAll, create, update, deleteCar), state => {
            state.loading = false
        })
        .addMatcher(isPending(getAll, create, update, deleteCar), state => {
            state.loading = true
        })
        .addMatcher(isRejected(getAll, create, update, deleteCar), (state, action) => {
            state.error = action.payload
            state.loading = false
        })
})

const {reducer: carReducer, actions} = carSlice

const carAction = {...actions, getAll, create, update, deleteCar}

export {
    carAction,
    carReducer
}
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars:[],
    trigger:false,
    carForUpdate:null
}

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        setResponse:(state, action)=>{
            state.cars = action.payload
        },
        changeTrigger: (state) => {
            state.trigger =!state.trigger;
        },
        setCarUpdate: (state, action)=>{
            state.carForUpdate = action.payload
        }
    }
})

const {reducer:carReducer, actions} = carSlice

const carAction = {...actions}

export {
    carAction,
    carReducer
}
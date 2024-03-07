import {configureStore} from "@reduxjs/toolkit";
import {episodeReducer} from "./slices/episodeSlice";
import {charReducer} from "./slices/charSlice";

const store = configureStore({
    reducer:{
        episodes:episodeReducer,
        chars:charReducer
    }
    }

)
export {
    store
}
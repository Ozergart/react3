import {configureStore} from "@reduxjs/toolkit";
import {episodeReducer} from "./slices/episodeSlice";

const store = configureStore({
    reducer:{
        episodes:episodeReducer()
    }
    }

)
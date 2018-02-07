import { combineReducers } from "redux";

import shoppableVideoReducer from "./shoppableVideoReducer";

const rootReducer = combineReducers({
    shoppableVideoReducer,
});

export default rootReducer;

import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import storesReducer from "./stores";
import { combineReducers } from '@reduxjs/toolkit'

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    stores: storesReducer,
})

export default allReducers;
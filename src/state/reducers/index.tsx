import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import storesReducer from "./fetchStores";
import { combineReducers } from '@reduxjs/toolkit'

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    stores: storesReducer,
})

export default allReducers;
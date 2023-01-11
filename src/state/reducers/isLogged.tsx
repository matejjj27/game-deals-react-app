import { Reducer } from "@reduxjs/toolkit";

interface State {
    value: boolean,
}

const defaultState: State = { value: false };


const loggedReducer: Reducer<State> = (state = defaultState, action) => {
    switch(action.type) {
        case "LOG_IN":
            return {
                ...state,
                value: !state
            };
        default:
            return state;
    }
}

export default loggedReducer;
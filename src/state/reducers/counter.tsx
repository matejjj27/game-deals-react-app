import { Reducer } from "@reduxjs/toolkit";

interface State {
    value: number,
}

const defaultState: State = { value: 0 };

const counterReducer: Reducer<State> = (state = defaultState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {
                ...state,
                value: state.value + action.payload 
            };
        case "DECREMENT":
            return {
                ...state,
                value: state.value - action.payload
            };
        default:
            return state;
    }
}

export default counterReducer;
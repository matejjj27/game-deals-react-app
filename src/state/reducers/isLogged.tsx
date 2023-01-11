import { Reducer } from "@reduxjs/toolkit";

interface State {
    value: boolean,
}

const defaultState: State = { value: false };

const loggedReducer: Reducer<State> = (state = defaultState, action) => {
    switch(action.type) {
        case "LOG_IN":
            return {
                value: !state.value,
            };
        default:
            return {
                value: state.value,
            };
    }
}

export default loggedReducer;
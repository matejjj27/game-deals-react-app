const defaultState = { value: 0 };

type Action = {
    type: string,
    payload: number
}

const counterReducer = (state = defaultState, action: Action) => {
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
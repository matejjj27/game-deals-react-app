const defaultState: number = 0;

type Action = {
    type: string,
    payload: number
}

const counterReducer = (state = defaultState, action: Action) => {
    switch(action.type) {
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state - action.payload;
        default:
            return state;
    }
}

export default counterReducer;
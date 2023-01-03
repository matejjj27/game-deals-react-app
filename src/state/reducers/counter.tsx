const defaultState:number = 0;

type Action = {
    type: string,
    payload: number
}

const counterReducer = (state: number = defaultState, action: Action) => {
    switch(action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return 0;
    }
}

export default counterReducer;
const defaultState = false;

type Action = {
    type: string
}

const loggedReducer = (state: boolean = defaultState, action: Action) => {
    switch(action.type) {
        case "LOG IN":
            return !state;
        default:
            return state;
    }
}

export default loggedReducer;
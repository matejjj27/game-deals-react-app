const defaultState = { value: false };

type Action = {
    type: string
}

const loggedReducer = (state = defaultState, action: Action) => {
    switch(action.type) {
        case "LOG IN":
            return {
                ...state,
                value: !state
            };
        default:
            return state;
    }
}

export default loggedReducer;
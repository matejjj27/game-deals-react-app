import { Reducer } from "@reduxjs/toolkit";

interface State {
    stores: IStore[];
}
  
export interface IStore {
    storeID: number;
    isActive: boolean,
    storeName: string;
    images: {
        banner: string,
        logo: string,
        icon: string,
    },
};

const defaultState: State = {stores: []};

const storesReducer: Reducer<State> = (state = defaultState, action) => {
    switch(action.type) {
        case "FETCH_STORES_SUCCESS":
            return {
                ...state,
                stores: action.payload,
            }
        case "FETCH_STORES_FAIL":
            return {
                ...state,
                stores: action.payload,
            }
        default:
            return state;
    }
}

export default storesReducer;
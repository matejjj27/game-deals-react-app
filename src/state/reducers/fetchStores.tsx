import { Reducer } from "@reduxjs/toolkit";

interface State {
    stores: Array<IStore>,
    selectedStores: Array<IStore>,
    favoriteQuantity: number,
}
  
export interface IStore {
    key: number,
    storeID: number;
    isActive: boolean,
    storeName: string,
    isFavorite?: boolean,
    images: {
        banner: string,
        logo: string,
        icon: string,
    },
    handleClick?: () => void,
};

const defaultState: State = {stores: [], selectedStores: [], favoriteQuantity: 0};

const storesReducer: Reducer<State> = (state = defaultState, action) => {
    switch(action.type) {
        case "FETCH_STORES_SUCCESS":
            return {
                ...state,
                stores: action.payload,
            }
        case "FETCH_STORES_ERROR":
            return {
                ...state,
                stores: action.payload,
            }
        case "SELECT_STORE_SUCCESS":
            return {
                ...state,
                selectedStores: action.payload,
                favoriteQuantity: state.selectedStores.length + 1,
            }
        case "SELECT_STORE_ERROR":
            return {
                ...state,
                selectedStores: action.payload,
            }
        default:
            return state;
    }
}

export default storesReducer;
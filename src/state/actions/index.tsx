import axios from "axios";
import { IStore } from "../reducers/fetchStores";

export const increment = (value: number) => {
    return {
        type: "INCREMENT",
        payload: value
    };
};

export const decrement = (value: number) => {
    return {
        type: "DECREMENT",
        payload: value
    };
};

export const logIn = () => {
    return {
        type: "LOG_IN"
    }
};

interface FetchStoresSuccessAction {
    type: 'FETCH_USERS_SUCCESS';
    payload: IStore[];
};
  
interface FetchStoresErrorAction {
    type: 'FETCH_USERS_ERROR';
    payload: string;
};

type FetchStoresAction = FetchStoresSuccessAction | FetchStoresErrorAction;
  
export const fetchStores = async (dispatch: any): Promise<FetchStoresAction> => {
    try {
        const response = await axios.get('https://www.cheapshark.com/api/1.0/stores');
        return dispatch({ type: 'FETCH_STORES_SUCCESS', payload: response.data.slice(0, 14) });
    } catch (error) {
        return dispatch({ type: 'FETCH_STORES_ERROR', payload: error });
    }
};

interface SelectStoresSuccessAction {
    type: 'FETCH_USERS_SUCCESS';
    payload: IStore[];
};
  
interface SelectStoresErrorAction {
    type: 'FETCH_USERS_ERROR';
    payload: string;
};

type SelectStoresAction = SelectStoresSuccessAction | SelectStoresErrorAction;

export const selectStore = (dispatch: any, store: IStore, stores: Array<IStore>): Promise<SelectStoresAction> => {
    try {
        return dispatch({ type: 'SELECT_STORE_SUCCESS', payload: addToFavorites(stores, store) });
    } catch (error) {
        return dispatch({ type: 'SELECT_STORE_ERROR', payload: error });
    }
};

export const removeStore = (dispatch: any, store: IStore, stores: Array<IStore>): Promise<SelectStoresAction> => {
    try {
        return dispatch({ type: 'REMOVE_STORE_SUCCESS', payload: removeFromfavorites(stores, store) });
    } catch (error) {
        return dispatch({ type: 'REMOVE_STORE_ERROR', payload: error });
    }
};

const addToFavorites = (stores: Array<IStore>, store: IStore) => {
        let isFavorite = false;

        for (let i=0; i<stores.length; i++) {
            if(stores[i].storeID === store.storeID)
                isFavorite = true;
        }
        if(isFavorite === false)
            return stores.concat(store);
        else 
            return stores;

};

const removeFromfavorites = (stores: Array<IStore>, store: IStore) => {
    return stores.filter(item => item.storeID !== store.storeID);
}
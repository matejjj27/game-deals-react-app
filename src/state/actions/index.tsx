import axios from "axios";
import { IStore } from "../reducers/stores";

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
}

interface FetchUsersSuccessAction {
    type: 'FETCH_USERS_SUCCESS';
    payload: IStore[];
}
  
interface FetchUsersErrorAction {
    type: 'FETCH_USERS_ERROR';
    payload: string;
}

type FetchUsersAction = FetchUsersSuccessAction | FetchUsersErrorAction
  
export const fetchStores = async (dispatch: any): Promise<FetchUsersAction> => {
    try {
        const response = await axios.get('https://www.cheapshark.com/api/1.0/stores');
        return dispatch({ type: 'FETCH_STORES_SUCCESS', payload: response.data.slice(0, 12) });
    } catch (error) {
        return dispatch({ type: 'FETCH_STORES_FAIL', payload: error });
    }
}
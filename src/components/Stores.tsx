import { useEffect } from 'react';
import React from "react"
import Store from "./Store"
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '..';
import { useDispatch } from 'react-redux';
import { fetchStores } from '../state/actions';
import { IStore } from '../state/reducers/stores'

const Stores: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        fetchStores(dispatch);
    }, [])

    const counter = useSelector<RootState, number>((state) => state.counter.value);
    const stores = useSelector<RootState, Array<IStore>>((state) => state.stores.stores);

    const ShowAllStores = () => {
        return <>{stores.map(store => {
            return <Store 
                        key = {store.storeID}
                        title = {store.storeName}
                        thumbnail = {store.images.banner}
                        isActive = {store.isActive}
                    />
        })}</>
    }

    return (
        <div className='games'>
          <h1>Stores</h1>
          <h3>Counter: {counter}</h3>
          <ShowAllStores/>
        </div>
    )
}

export default Stores;
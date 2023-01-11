import { useState, useEffect } from 'react';
import React from "react"
import axios from 'axios';
import Store from "./Store"
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '..';

interface IStoreState {
    storeID: string,
    storeName: string,
    isActive: boolean,
    images: {
        banner: string,
        logo: string,
        icon: string
    }
}

const Stores:React.FC = () => {
    const [stores, setStores] = useState<Array<IStoreState>>([]);

    useEffect(() => {
        axios.get('https://www.cheapshark.com/api/1.0/stores')
        .then(response => setStores(response.data.slice(0, 12)))
        .catch((error) => console.error(error));
    }, [])

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

    const counter = useSelector<RootState, number>((state) => state.counter.value);

    return (
        <div className='games'>
          <h1>Stores</h1>
          <h3>Counter: {counter}</h3>
          <ShowAllStores/>
        </div>
    )
}

export default Stores;
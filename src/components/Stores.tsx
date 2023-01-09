import { useState, useEffect } from 'react';
import React from "react"
import axios from 'axios';
import Store from "./Store"

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
        .then(response => setStores(response.data.slice(0, 15)))
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

    return (
        <div className='games'>
          <h1>Stores</h1>
          <ShowAllStores/>
        </div>
    )
}

export default Stores;
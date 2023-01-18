import { useEffect } from 'react';
import React from "react"
import Store from "./Store"
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '..';
import { useDispatch } from 'react-redux';
import { fetchStores, removeStore, selectStore } from '../state/actions';
import { IStore } from '../state/reducers/fetchStores'

const Stores: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        fetchStores(dispatch);
    }, [])

    const stores = useSelector<RootState, Array<IStore>>((state) => state.stores.stores);
    const favoriteQuantity = useSelector<RootState, number>((state) => state.stores.favoriteQuantity);
    const selectedStores = useSelector<RootState, Array<IStore>>((state) => state.stores.selectedStores);

    const ShowSelectedStores = () => {
        return <>{selectedStores.map(store => {
            return <Store 
                        key = {store.storeID}
                        storeID = {store.storeID}
                        storeName = {store.storeName}
                        images = {store.images}
                        isActive = {store.isActive}
                        isFavorite = {true}
                        handleClick = {() => removeStore(dispatch, store, selectedStores)}
                    />
            return <></>
        })}</>
    }

    const ShowAllStores = () => {
        return <>{stores.map(store => {
            return <Store 
                        key = {store.storeID}
                        storeID = {store.storeID}
                        storeName = {store.storeName}
                        images = {store.images}
                        isActive = {store.isActive}
                        handleClick = {() => selectStore(dispatch, store, selectedStores)}
                    />
        })}</>
    }

    return (
        <div className='games'>
            <h3>Favorite Stores: {favoriteQuantity}</h3>
            {selectedStores!==undefined ? <ShowSelectedStores /> :<>Undefined</>}
            <h1>Stores</h1>
            <ShowAllStores />
            <br></br>
            <div className='stores-legend'>
                <img className="img" alt="active" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2FniX%2FodK%2FniXodKbxT.png&f=1&nofb=1&ipt=f4bedda04ec04f0746faa49a3989955e3901520fa72c8aa2f6a4ce1fcaafc21b&ipo=images"/>
                <p>Active</p><br></br>
                <img className="img" alt="not active" src="https://www.pngarts.com/files/3/Letter-X-Transparent-Image.png"/>
                <p>Not Active</p>
            </div>
        </div>
    )
}

export default Stores;
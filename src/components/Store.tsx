import { IStore } from "../state/reducers/fetchStores";

const Store: React.FC<IStore> = ({storeName, images, isActive, isFavorite, handleClick}) => {

    const imgUrl = `https://www.cheapshark.com/${images.banner}`

    return (
        <div className = "game">
            {isFavorite !== true ?
            <div>
                <img className="store-img" src={imgUrl} alt="store"/>
                <h3>{storeName}</h3>
        
                {(isActive)
                ?
                <img className="img" alt="active" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2FniX%2FodK%2FniXodKbxT.png&f=1&nofb=1&ipt=f4bedda04ec04f0746faa49a3989955e3901520fa72c8aa2f6a4ce1fcaafc21b&ipo=images"/>
                :
                <img className="img" alt="not active" src="https://www.pngarts.com/files/3/Letter-X-Transparent-Image.png"/>}
                <br></br><br></br>
                <button className="button-22" onClick={handleClick}>Add to Favorites</button>
            </div>
            :
            <div className="selected-stores">
                <img className="store-img" src={imgUrl} alt="store"/><br></br>
                {/* <h3>{storeName}</h3> */}
                <button className="button-22-remove" onClick={handleClick}>Remove</button>
            </div>
            }
      </div>
    )
}

export default Store;
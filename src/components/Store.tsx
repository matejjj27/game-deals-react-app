type StoreProps = {
    title: string,
    thumbnail: string,
    isActive: boolean
}

const Store:React.FC<StoreProps> = ({title, thumbnail, isActive}) => {

    const imgUrl = `https://www.cheapshark.com/${thumbnail}`

    return (
        <div className = "game">
        <img className="store-img" src={imgUrl} alt="store"/>
        <h3>{title}</h3>
        
        {(isActive)
        ?
        <img className="img" alt="active" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2FniX%2FodK%2FniXodKbxT.png&f=1&nofb=1&ipt=f4bedda04ec04f0746faa49a3989955e3901520fa72c8aa2f6a4ce1fcaafc21b&ipo=images"/>
        :
        <img className="img" alt="not active" src="https://www.pngarts.com/files/3/Letter-X-Transparent-Image.png"/>}
      </div>
    )
}

export default Store;
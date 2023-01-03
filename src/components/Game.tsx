type GameProps = {
    title: string,
    normalPrice: number,
    salePrice: number,
    thumbnail: string
}

const Game:React.FC<GameProps> = ({title, normalPrice, salePrice, thumbnail}) => {
    return (
        <div className="game">
            <img className="game-img" src={thumbnail} alt="game"/>
            <h3>{title}</h3>
            <p className="normal-price">${normalPrice}</p>
            <h4 className="sale-pricee">${salePrice}</h4>
        </div>
    )
}

export default Game;
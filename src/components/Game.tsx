import { IGameProps } from "../hooks/use-games";

const Game: React.FC<IGameProps> = ({ title, normalPrice, salePrice, thumb, quantity, incrementQuantity }) => {
    return (
        <div className="game">
            <img className="game-img" src={thumb} alt="game-img"/>
            <h3>{title}</h3>
            <p className="normal-price">${normalPrice}</p>
            <h4 className="sale-price">${salePrice}</h4>
            {/* {quantity!==0 ? <>{quantity}</> : <></>} */}
            <button className="button-22" onClick={incrementQuantity}>Add to Cart</button>
        </div>
    )
}

export default Game;
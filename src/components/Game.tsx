import { IGameProps } from "../hooks/use-games";

const Game: React.FC<IGameProps> = ({ title, normalPrice, salePrice, thumb }) => {
    return (
        <div className="game">
            <img className="game-img" src={thumb} alt="game-img"/>
            <h3>{title}</h3>
            <p className="normal-price">${normalPrice}</p>
            <h4 className="sale-price">${salePrice}</h4>
        </div>
    )
}

export default Game;
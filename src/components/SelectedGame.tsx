import { IGameProps } from "../hooks/use-games";

const SelectedGame: React.FC<IGameProps> = ({ title, thumb, quantity, incrementQuantity, decrementQuantity }) => {

    return (
        <div className="selected-game">
            {/* <img className="game-img" src={thumb} alt="game-img"/> */}
            <h3 className="selected-game-title">{title}</h3>
            <button className="plus-minus-button" onClick={decrementQuantity}>-</button>
            {quantity!==0 ? 
            <h3 className="selected-game-quantity">{quantity}</h3> 
            : <></>}
            <button className="plus-minus-button" onClick={incrementQuantity}>+</button>
        </div>
    )
}

export default SelectedGame;
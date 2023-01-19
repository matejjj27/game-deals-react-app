import { useState } from "react";
import { IGameProps } from "../hooks/use-games";

const SelectedGame: React.FC<IGameProps> = ({ title, salePrice, normalPrice, dealRating, thumb, quantity, incrementQuantity, decrementQuantity }) => {

    const [isShown, setsIsShown] = useState<boolean>(false);

    const handleClick = () => {
        setsIsShown(prev => !prev);
    }

    return (
        <div className="game">
            {isShown && <img className="game-img" src={thumb} alt="game-img"/>}
            <h3 className="selected-game-title">{title}</h3>
            {isShown && <><p className="normal-price">${normalPrice}</p>
            <h4 className="sale-price">${salePrice}</h4>
            <h4>Rating: {dealRating}{quantity}</h4></>}
            <div className="selected-game-regulator">
                <button className="plus-minus-button" onClick={decrementQuantity}>-</button>
                {quantity!==0 ? 
                <h3 className="selected-game-quantity">{quantity}</h3> 
                : <></>}
                <button className="plus-minus-button" onClick={incrementQuantity}>+</button>
            </div>
            <button className="details-button" onClick={handleClick}><small>{isShown ? "less" : "more"} details</small></button>
            
        </div>
    )
}

export default SelectedGame;
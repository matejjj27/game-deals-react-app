import { useGames } from "../hooks/use-games";
import { decrement } from "../state/actions";
import SelectedGame from "./SelectedGame";

const SelectedGames: React.FC = () => {

    const { selectedGames, increment, decrement, counter, } = useGames();

    const ShowSelectedGames = () => {
        return <>{selectedGames.map(game => {
            if(game.quantity !== undefined)
                return <SelectedGame 
                            key = {game.dealID}
                            title = {game.title}
                            normalPrice = {game.normalPrice}
                            salePrice = {game.salePrice}
                            dealRating = {game.dealRating}
                            thumb = {game.thumb}
                            quantity = {game.quantity}
                            incrementQuantity = {() => increment(game)}
                            decrementQuantity = {() => decrement(game)}
                        />
            return <></>
        })}</>
    }

    return (
        <div>
            <h3>Products in Cart: {counter}</h3>
            <ShowSelectedGames />
        </div>
    )
}

export default SelectedGames;
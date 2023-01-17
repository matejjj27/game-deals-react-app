import { useGames } from "../hooks/use-games";
import { decrement } from "../state/actions";
import SelectedGame from "./SelectedGame";

const SelectedGames: React.FC = () => {

    const { games, selectedGames, increment, decrement, counter, } = useGames();

    const ShowSelectedGames = () => {
        return <>{selectedGames.map(game => {
            if(game.quantity !== undefined && game.quantity !== 0)
            return <SelectedGame 
                        key = {game.dealID}
                        title = {game.title}
                        normalPrice = {game.normalPrice}
                        salePrice = {game.salePrice}
                        thumb = {game.thumb}
                        quantity = {game.quantity}
                        incrementQuantity = {() => increment(game)}
                        decrementQuantity = {() => decrement(game)}
                    />
        })}</>
    }

    return (
        <div>
            <h3>Selected Products: {counter}</h3>
            <ShowSelectedGames />
        </div>
    )
}

export default SelectedGames;
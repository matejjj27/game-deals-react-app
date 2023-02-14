import React, { useRef } from "react"
import Game from "./Game"
import { useUser } from '../hooks/use-user';
import { useGames } from '../hooks/use-games';
import SelectedGames from "./SelectedGames";
import { useSelector } from "react-redux";
import { RootState } from "..";

const Games: React.FC = () => {

    const inputRef = useRef<any>(null);

    const { user } = useUser();
    const { games, searchGames, increment } = useGames();
    const isLogged = useSelector<RootState, boolean>((state) => state.isLogged.value);

    console.log("Games rendered");

    const ShowAllGames = () => {
        return <>{games.map(game => {
            return <Game 
                        key = {game.dealID}
                        title = {game.title}
                        normalPrice = {game.normalPrice}
                        salePrice = {game.salePrice}
                        dealRating = {game.dealRating}
                        thumb = {game.thumb}
                        incrementQuantity = {() => increment(game)}
                    />
        })}</>
    }

    return (
        <div className='games'>
          
          {(!isLogged || user==="Guest") ? <h1>Games</h1> : <><SelectedGames /><h1>Games for {user}</h1></>}
          <input ref={inputRef} className='game-input' id="searchBar" type="search" placeholder='Search for games' size={14}/>
          <button className="button-22" onClick={() => searchGames(inputRef.current.value)}>Search</button>
          <br></br>
          <ShowAllGames/>
        </div>
    )
}

export default Games;
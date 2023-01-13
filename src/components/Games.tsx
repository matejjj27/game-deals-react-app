import React from "react"
import Game from "./Game"
import { useUser } from '../hooks/use-user';
import { useGames } from '../hooks/use-games';

const Games: React.FC = () => {

    const {user} = useUser();
    const { games, searchGames } = useGames();

    const ShowAllGames = () => {
        return <>{games.map(game => {
            return <Game 
                        key = {game.dealID}
                        title = {game.title}
                        normalPrice = {game.normalPrice}
                        salePrice = {game.salePrice}
                        thumb = {game.thumb}
                    />
        })}</>
    }

    return (
        <div className='games'>
          <h1>Games for {user}</h1>
          <input className='game-input' id="searchBar" type="search" placeholder='Search for games' size={14}/>
          <button onClick={searchGames}>Search</button>
          <br></br>
          <ShowAllGames/>
        </div>
    )
}

export default Games;
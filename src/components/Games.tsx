import React from "react"
import Game from "./Game"
import { useUser } from '../hooks/use-user';
import { useGames } from '../hooks/use-games';

const Games:React.FC = () => {

    const {user} = useUser();

    const { games, searchGames } = useGames();

    const ShowAllGames = () => {
        if(games !== null)
            return <>{games.map(game => {
                return <Game 
                        key = {game.key}
                        title = {game.title}
                        normalPrice = {game.normalPrice}
                        salePrice = {game.salePrice}
                        thumb = {game.thumb}
                        />
            })}</>
        else
        return <>No Games to show</>
    }

    return (
        <div className='header'>
          <h1>Games for {user}</h1>
          <input className='game-input' id="searchBar" type="search" placeholder='Search for games' onChange={searchGames}/><br></br>
          <ShowAllGames/>
        </div>
    )
}

export default Games;
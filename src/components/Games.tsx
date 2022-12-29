import { useState, useEffect } from 'react';
import React from "react"
import axios from 'axios';
import Game from "./Game"
import {useNavigate, useLocation} from 'react-router-dom'

const Games:React.FC = () => {
    const [games, setGames] = useState([]);

    const location = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://www.cheapshark.com/api/1.0/deals')
        .then(response => setGames(response.data.slice(0, 15)))
        .catch((error) => console.error(error));
    }, [])

    useEffect(() => {
        let button = document.getElementById("searchBar") as HTMLInputElement;
        let title = button.value;
        axios.get(`https://www.cheapshark.com/api/1.0/deals?title=${title}`)
        .then(response => setGames(response.data.slice(0, 15)))
        .catch((error) => console.error(error));
    }, [location])

    const ShowAllGames = () => {
        return <>{games.map(game => {
            return <Game 
                        key = {game['dealID']}
                        title = {game['title']}
                        normalPrice = {game['normalPrice']}
                        salePrice = {game['salePrice']}
                        thumbnail = {game['thumb']}
                    />
        })}</>
    }

    const searchGames = () => {
        let button = document.getElementById("searchBar") as HTMLInputElement;
        let title = button.value;
        navigate({
            pathname: "/games-catalogue",
            search: `?keyword=${title}`
        })
        // let keyword = queryParams.get("keyword")
        // axios.get(`https://www.cheapshark.com/api/1.0/deals?title=${keyword}`)
        // .then(response => setGames(response.data.slice(0, 10)))
    }

    return (
        <div className='games'>
          <h1>Games</h1>
          <input id="searchBar" type="search" placeholder='Search for games' onChange={searchGames}/>
         <>{<ShowAllGames/>}</>
        </div>
    )
}

export default Games;
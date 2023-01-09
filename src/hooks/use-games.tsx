import { useState, createContext, ReactNode, useContext, useEffect } from 'react';
import axios from 'axios';

export interface IGameProps {
    key: string,
    title: string,
    normalPrice: number,
    salePrice: number,
    thumb: string,
}

interface IGamesProps {
    games: Array<IGameProps>,
    toggleGames: any,
    searchGames: any,
}

interface IGameProviderProps {
    children: ReactNode;
}

const GameContext = createContext<IGamesProps>(({} as IGamesProps));

const GameProvider = ({ children }: IGameProviderProps) => {
    const [games, setGames] = useState<any | null>(null);

    let button: HTMLInputElement;

    useEffect(() => {
        axios.get('https://www.cheapshark.com/api/1.0/deals')
        .then(response => setGames(response.data.slice(0, 15)))
        .catch((error) => console.error(error));
    },[])

    const toggleGames = (allGames: any) => {
        setGames(allGames);
    }

    const searchGames = () => {
        if(document.getElementById("searchBar") !== null )
            button = document.getElementById("searchBar") as HTMLInputElement;
        let title = button.value;
        axios.get(`https://www.cheapshark.com/api/1.0/deals?title=${title}`)
        .then(response => setGames(response.data.slice(0, 15)))
        .catch((error) => console.error(error));
    }

    const value = {
        games,
        toggleGames,
        searchGames,
    }

    return (
        <GameContext.Provider value={value}>
            { children }
        </GameContext.Provider>
    )
}

const useGame = () => useContext(GameContext);

export { useGame }
export default GameProvider;
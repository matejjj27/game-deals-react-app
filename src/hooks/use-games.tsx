import { useState, createContext, ReactNode, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export interface IGameProps {
    dealID?: string,
    title: string,
    normalPrice: number,
    salePrice: number,
    dealRating: number,
    thumb: string,
    quantity?: number,
    incrementQuantity?: () => void,
    decrementQuantity?: () => void,
}

interface IGamesProps {
    games: Array<IGameProps>,
    selectedGames: Array<IGameProps>,
    counter: number,
    increment: (game: IGameProps) => void,
    decrement: (game: IGameProps) => void,
    searchGames: (title: string) => void,
}

interface IGameProviderProps {
    children: ReactNode;
}

const GameContext = createContext<IGamesProps>(({} as IGamesProps));

const GameProvider = ({ children }: IGameProviderProps) => {
    const [games, setGames] = useState<Array<IGameProps>>([]);
    const [selectedGames, setSelectedGames] = useState<Array<IGameProps>>([]);
    const [counter, setCounter] = useState<number>(0);

    const navigate = useNavigate();

    // let button: HTMLInputElement;

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();

        axios.get('https://www.cheapshark.com/api/1.0/deals', { cancelToken: cancelToken.token })
            .then(response => setGames(response.data.slice(0, 12)))
            .catch((error) => {
                if (axios.isCancel(error)) {
                    console.log("canceled");
                } else {
                    console.error(error);
                }
            });

        return () => cancelToken.cancel();
    }, [])

    const increment = (game: IGameProps) => {
        if(game.quantity === undefined || game.quantity === 0) {
            game.quantity = 1;
            setCounter(counter => counter + 1);
            setSelectedGames(prev => prev.concat(game))
        }
        else {
            game.quantity = game.quantity + 1;
            setCounter(counter => counter + 1);
        }
    }

    const decrement = (game: IGameProps) => {
        if(game.quantity === 1) {
            let arr = selectedGames.filter(item => item.dealID !== game.dealID);
            setSelectedGames(arr);
        }

        if(game.quantity !== undefined && game.quantity >= 1){
            game.quantity = game.quantity - 1;
            setCounter(counter => counter - 1);
        }
    }

    const searchGames = (title: string) => {
        // if(document.getElementById("searchBar") !== null )
        //     button = document.getElementById("searchBar") as HTMLInputElement;
        // let title = button.value;
        navigate({
            pathname: "/games",
            search: `?keyword=${title}`
        });
        axios.get(`https://www.cheapshark.com/api/1.0/deals?title=${title}`)
        .then(response => setGames(response.data.slice(0, 12)))
        .catch((error) => console.error(error));
    }

    const value = {
        games,
        selectedGames,
        counter,
        increment,
        decrement,
        searchGames,
    }

    return (
        <GameContext.Provider value={value}>
            { children }
        </GameContext.Provider>
    )
}

const useGames = () => useContext(GameContext);

export { useGames }

export default GameProvider;
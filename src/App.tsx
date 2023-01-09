import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Games from './components/Games';
import Stores from './components/Stores';
import Profile from './components/Profile';
import { UserProvider } from "./hooks/use-user"
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, logIn } from "./state/actions";
import { RootState } from './index';
import InitProviders, { ProviderType } from './components/common/InitProviders';
import GameProvider from './hooks/use-games';

const App: React.FC = () => {

  const isLogged = useSelector<RootState, boolean>((state) => state.isLogged.value);
  const counter = useSelector<RootState, number>((state) => state.counter.value);
  
  let input = document.getElementById("valueBar") as HTMLInputElement | null;

  const changeCounter = (sign: string) => {
    if(sign === "+"){
      if(input !== null)
        if(!isNaN(Number(input.value)))
          dispatch(increment(Number(input.value)));
    }
    else if(sign === "-"){
      if(input !== null)
        if(!isNaN(Number(input.value)))
          dispatch(decrement(Number(input.value)));
    }
  }
  
  const dispatch = useDispatch();

  const providers = [
    UserProvider,
    GameProvider,
  ] as ProviderType[];

  return (
    <div className="App">
            <BrowserRouter>
            <Header />
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment(1))}>+1</button>
            <button onClick={() => dispatch(decrement(1))}>-1</button><br></br>
            <input type="text" id="valueBar" title="Must be a valid number" maxLength={6} size={4}/>
            <button onClick={() => changeCounter("+")}>+</button>
            <button onClick={() => changeCounter("-")}>-</button>
            {/* <button onClick={() => dispatch(logIn())}>Log in</button> */}
            {isLogged ? <h2>You are logged in</h2> : ""}
            <InitProviders providers={providers}>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/games" element={<Games />}/>
                <Route path="/stores" element={<Stores />}/>
                <Route path="/profile" element={<Profile />}/>
              </Routes>
            </InitProviders>
            <Footer />
            </BrowserRouter>
    </div>
  );
}

export default App;
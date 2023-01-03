import React from 'react';
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

const App: React.FC = () => {

  const isLogged = useSelector<RootState, boolean>((state) => state.isLogged.value);
  const counter = useSelector<RootState, number>((state) => state.counter.value);
  let value = 1;
  let input = document.getElementById("valueBar") as HTMLInputElement;
  // value = input.valueAsNumber;
  // input.valueAsNumber === null ? value = 0 : value = input.valueAsNumber;

  const handleClick = () => {
    value = Number(input.value);
    dispatch(increment(value));
  }
  
  const dispatch = useDispatch();

  return (
    <div className="App">
            <BrowserRouter>
            <Header />
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment(value))}>+</button>
            <button onClick={() => dispatch(decrement(value))}>-</button><br></br>
            <input type="text" id="valueBar" placeholder='Enter number' size={3} />
            <button onClick={handleClick}>Add</button>
            {/* <button onClick={() => dispatch(logIn())}>Log in</button> */}
            {isLogged ? <h2>You are logged in</h2> : ""}
            <UserProvider>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/games" element={<Games />}/>
                <Route path="/stores" element={<Stores />}/>
                <Route path="/profile" element={<Profile />}/>
              </Routes>
            </UserProvider>
            <Footer />
            </BrowserRouter>
    </div>
  );
}

export default App;

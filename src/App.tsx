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
import { increment, decrement } from "./state/actions";
import { RootState } from './index';

const App: React.FC = () => {
  
  const counter = useSelector<RootState, number>((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
            <BrowserRouter>
            <Header />
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
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

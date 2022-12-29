import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Games from './components/Games';
import Stores from './components/Stores';
import Profile from './components/Profile';
import { UserContext } from './hooks/use-user';
import { useState } from 'react';

const App: React.FC = () => {

  const [userName, setUserName] = useState({name: "Guest"})

  const handleUserSet = () => {
      const button = document.getElementById('nameBar') as HTMLInputElement
      let user = button.value;
      setUserName({name: user});
  }

  return (
    <div className="App">
            <BrowserRouter>
            <Header />
            <UserContext.Provider value={userName}>
              <div className='header'>
                <label htmlFor="nameBar">Enter your name:</label>
                <input className="name-bar" id="nameBar" type="text" placeholder='Enter your name' onChange={handleUserSet}/>
              </div>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/games" element={<Games />}/>
                <Route path="/stores" element={<Stores />}/>
                <Route path="/profile" element={<Profile />}/>
              </Routes>
            </UserContext.Provider>
            <Footer />
            </BrowserRouter>
    </div>
  );
}

export default App;

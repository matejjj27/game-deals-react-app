import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Games from './components/Games';
import Stores from './components/Stores';
import Profile from './components/Profile';
import  { UserProvider, IUserContext } from "./hooks/use-user"

const App: React.FC = () => {

  return (
    <div className="App">
            <BrowserRouter>
            <Header />
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

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Games from './components/Games';
import Stores from './components/Stores';
import Profile from './components/Profile';
import { UserProvider } from "./hooks/use-user"
import InitProviders, { ProviderType } from './components/common/InitProviders';
import GameProvider from './hooks/use-games';
import Counter from './components/Counter';

const App: React.FC = () => {

  const providers = [
    UserProvider,
    GameProvider,
  ] as ProviderType[];

  return (
    <div className="App">
            <BrowserRouter>
            <Header />
            <Counter />
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
import Header from "./Header";
import Footer from "./Footer";
import Games from './Games';
import Stores from './Stores';
import Profile from './Profile';
import Home from './Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/games-catalogue" element={<Games />}/>
                    <Route path="/stores-catalogue" element={<Stores />}/>
                    <Route path="/profile" element={<Profile />}/>
                </Routes>
            <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Dashboard;
import { useState } from 'react';
import {UserContext} from '../hooks/use-user';
import Profile from './Profile';

const Home = () => {

    const [userName, setUserName] = useState({name: "Guest"})

    const handleUserSet = () => {
        const button = document.getElementById('nameBar') as HTMLInputElement
        let user = button.value;
        setUserName({name: user});
    }
    
    return(
        <>
         {/* <h1>Welcome!</h1> */}
         <UserContext.Provider value={userName}>
            <Profile />
            <input className="name-bar" id="nameBar" type="text" placeholder='Enter your name'/>
            <button type='submit' onClick={handleUserSet}>Enter</button>
         </UserContext.Provider>
        </>
    )
}

export default Home;
import { useState } from 'react';
// import UserProvider from '../use-user';
import Profile from './Profile';

const Home = () => {

    const [userName, setUserName] = useState("Guest")

    const handleUserSet = () => {
        const button = document.getElementById('nameBar') as HTMLInputElement
        let user = button.value;
        setUserName(user);
    }
    
    return(
        <>
         <h1>Welcome {userName}!</h1>
         <input className="name-bar" id="nameBar" type="text" placeholder='Enter your name'/>
         <button type='submit' onClick={handleUserSet}>Enter</button>
         {/* <UserProvider>
            <Profile />
         </UserProvider> */}
        </>
    )
}

export default Home;
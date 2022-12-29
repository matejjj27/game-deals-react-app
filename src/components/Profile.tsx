import { useContext } from 'react';
import { UserContext } from "../hooks/use-user"

const Profile = () => {

    const user = useContext(UserContext);

    const handleClick = () => {
        const button = document.getElementById('name-bar') as HTMLInputElement
        let user1 = button.value;
        user.name = user1;
    }

    return (
        <>
        <h2>Name: {user.name}</h2>
        <input id="name-bar" placeholder='Change name'/>
        <button onClick={handleClick}>Save</button>
        </>
    )
}

export default Profile;
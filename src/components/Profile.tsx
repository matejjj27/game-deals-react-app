import React, { useContext } from 'react';
import {UserContext} from "../hooks/use-user"

const Profile = () => {

    const user = useContext(UserContext);

    return (
        <>
        {/* <h1>This is the Profile page</h1> */}
        <h1>Welcome {user.name}!</h1>
        </>
    )
}

export default Profile;
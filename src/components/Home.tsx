import { useContext } from 'react';
import { UserContext } from '../hooks/use-user';

const Home = () => {

    const context = useContext(UserContext);
    
    return(
        <>
            <h1>Welcome {context.name}!</h1>
            {/* <Profile /> */}
        </>
    )
}

export default Home;
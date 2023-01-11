import { useUser } from '../hooks/use-user';

const Home = () => {

    const { user } = useUser();
    
    return(
        <>
            <h1>Welcome {user}!</h1>
        </>
    )
}

export default Home;
import { useSelector } from 'react-redux';
import { RootState } from '..';
import { useUser } from '../hooks/use-user';

const Home: React.FC = () => {

    const { user } = useUser();

    const isLogged = useSelector<RootState, boolean>((state) => state.isLogged.value);
    
    return(
        <div className='games'>
            <br></br>
            <h1>Welcome {isLogged ? user : "Guest"}!</h1>
        </div>
    )
}

export default Home;
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { RootState } from '..';
import { logIn } from '../state/actions';

const Header: React.FC = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLogged = useSelector<RootState, boolean>((state) => state.isLogged.value);

    return (
        <header>
            <ul>
                <li onClick={() => navigate({pathname: "/"})}>Home</li>
                <li onClick={() => navigate({pathname: "/games"})}>Games</li>
                <li onClick={() => navigate({pathname: "/stores"})}>Stores</li>
                <li onClick={() => navigate({pathname: "/profile"})}>Profile</li>
                <li className='log-in' onClick={() => dispatch(logIn())}>Log {isLogged ? "out" : "in"}</li>
            </ul>
        </header>
    )
}

export default Header;
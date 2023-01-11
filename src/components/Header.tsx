import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logIn } from '../state/actions';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <header>
            <ul>
                <li onClick={() => navigate({pathname: "/"})}>Home</li>
                <li onClick={() => navigate({pathname: "/games"})}>Games</li>
                <li onClick={() => navigate({pathname: "/stores"})}>Stores</li>
                <li onClick={() => navigate({pathname: "/profile"})}>Profile</li>
                <li onClick={() => dispatch(logIn())}>Log in</li>
            </ul>
        </header>
    )
}

export default Header;
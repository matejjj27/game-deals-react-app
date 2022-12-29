import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate();

    return (
        <header>
            <ul>
                <li onClick={() => navigate({pathname: "/"})}>Home</li>
                <li onClick={() => navigate({pathname: "/games"})}>Games</li>
                <li onClick={() => navigate({pathname: "/stores"})}>Stores</li>
                <li onClick={() => navigate({pathname: "/profile"})}>Profile</li>
            </ul>
        </header>
    )
}

export default Header;
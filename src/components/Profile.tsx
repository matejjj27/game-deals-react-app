import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "..";
import  { useUser } from "../hooks/use-user"

const Profile: React.FC = () => {

    const { user, toggleUser } = useUser();
    const isLogged = useSelector<RootState, boolean>((state) => state.isLogged.value);

    const inputRef = useRef<any>(null);

    const changeName = () => {
        if(inputRef.current.value !== "")
            toggleUser(inputRef.current.value);
    }

    return (
        <div className='games'>
            <br></br>
            {isLogged ?
            <>
                <h1>Name: {user}</h1>
                <input ref={inputRef} id="name-bar" placeholder='Change name' size={10}/>
                <button className="button-22" onClick={changeName}>Save</button>
            </>
            : <h1>You have to Log in first!</h1>}
        </div>
    )
}

export default Profile;
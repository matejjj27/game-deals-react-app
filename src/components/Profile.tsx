import  { useUser } from "../hooks/use-user"

const Profile: React.FC = () => {

    const { user, toggleUser } = useUser();

    const handleClick = () => {
        let button: HTMLInputElement;
        if(document.getElementById('name-bar') !== null){
            button = document.getElementById('name-bar') as HTMLInputElement
            let user1 = button.value;
            toggleUser(user1);
        }
    }

    return (
        <div className='games'>
        <h1>Name: {user}</h1>
        <input id="name-bar" placeholder='Change name' size={10}/>
        <button onClick={handleClick}>Save</button>
        </div>
    )
}

export default Profile;
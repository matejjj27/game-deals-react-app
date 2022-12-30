import  { useUser } from "../hooks/use-user"

const Profile = () => {

    const { user, toggleUser } = useUser();

    const handleClick = () => {
        const button = document.getElementById('name-bar') as HTMLInputElement
        let user1 = button.value;
        toggleUser(user1);
    }

    return (
        <div className='header'>
        <h2>Name: {user}</h2>
        <input id="name-bar" placeholder='Change name'/>
        <button onClick={handleClick}>Save</button>
        </div>
    )
}

export default Profile;
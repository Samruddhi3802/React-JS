import { useContext } from 'react';
import { userContext } from '../context/UserContext';

export default function Navbar(){
    let {user, isLoggedIn, setUser, setIsLoggedIn}=useContext(userContext);
    function handleClick()
    {
        if(isLoggedIn){
            setUser(null);
            setIsLoggedIn(false);
        } 
        else{
            setUser("Samruddhi");
            setIsLoggedIn(true);
        }
        
    }

    return(
        <div className='bg-black text-white p-4 flex justify-between items-center px-10'>
            <h1 className='text-2xl font-bold'>{user?user:"Guest"}</h1>
            <button onClick={handleClick} className='bg-white text-black px-4 py-2 rounded-md'>{isLoggedIn?"Logout":"Login"}</button>
        </div>
    )
}


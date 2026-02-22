import { useContext} from "react";
import {userContext} from "../context/UserContext.js";

export default function Profile()
{
    let {user, isLoggedIn}=useContext(userContext);
    let style={
        color:isLoggedIn?"green":"red",
        fontSize:"40px",
        textAlign:"center",
        marginTop:"60px"
    }
     if(isLoggedIn)
     {
        return (
            <h2 style={style}>Welcome {user?user:"Guest"}</h2>
        )
     }
     else{
        return(
            <h2 style={style}>Please Login</h2>
        )
     }
}


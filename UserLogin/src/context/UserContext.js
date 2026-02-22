import {createContext} from 'react'

export const userContext=createContext({user:null, isLoggedIn:false});

export const UserContextProvider=userContext.Provider;
import React from 'react'
import { NavLink } from 'react-router-dom'

const UserData = () => {
    return (
        <div>


        </div>
    )
}

export default componentName



{
    localStorage.user !== null || "" ? <NavLink to="/user" >
        Zarejestruj uzytkownika </NavLink> : <NavLink to="/userData" >Dane uzytkownika</NavLink>
}

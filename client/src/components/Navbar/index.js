import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav class="nav">
            {props.user ? <a href="Login">Log Out</a> : <a href="Login">Log In</a>}
            <Link to="/">Main Menu</Link>
            <Link to ="Review">Review</Link>
            <Link to ="Favorites">Favorites</Link>
        </nav>
    )
}

export default Nav

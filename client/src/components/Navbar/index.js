import React from 'react'
import { Link } from 'react-router-dom'
const Nav = (props) => {
    return (
        <nav class="nav">
            {props.user ? <Link to="/login">Log Out</Link> : <Link to="login">Log In</Link>}
            <Link to="/">Main Menu</Link>
            <Link to="/review">Review</Link>
            <Link to="/favorites">Favorites</Link>
        </nav>
    )
}
export default Nav;
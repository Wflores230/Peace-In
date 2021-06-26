import React from 'react'

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <p className="navbar-brand" href="#"></p>
            <button className="navbar-toggler" onclick="movebutton()" data-toggle="collapse" data-target="#navbarMenu">
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarMenu">
              <ul className="navbar-nav">
                    <li className="nav-item active">
                    <a className="nav-link" >Log in</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" >Sign Up</a>
                    </li>
              </ul>
            </div>
        </nav>
        </div>
    )
}

export default Nav

import React from 'react'

function Header(props) {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#">{props.logo}</a>
            <ul className="navbar-nav">
                {props.menu.map(menuItem =>  <li className="nav-item">
                <a className="nav-link" href="#">{menuItem}</a>
                </li>)}
            </ul>
        </nav>
    )
}

export default Header

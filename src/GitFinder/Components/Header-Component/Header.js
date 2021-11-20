import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar navbar-expand-sm bg-danger navbar-danger">
            <Link className="navbar-brand text-white" to="/">Git Finder</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header

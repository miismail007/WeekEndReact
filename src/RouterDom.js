import React from 'react'
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';


function RouterDom() {
    return (
        <Router>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <Link className="navbar-brand" to="/home">Logo</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/home' element = {<h1>Home</h1>}></Route>
                <Route path='/about' element = {<h1>About</h1>}></Route>
                <Route path='/contact' element = {<h1>Contact</h1>}></Route>
            </Routes>
        </Router>
    )
}

export default RouterDom

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './Components/Header-Component/Header'
import Form from './Components/SearchComponent/Form'
import SingleUserView from './Components/UserList-Component/SingleUserView'
import Users from './Components/UserList-Component/Users'

function GitFinder() {
    const [users,setUsers] = useState([])
    const getInitialUsers = async() => {
        await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).
        then((res)=>{
            setUsers(res.data);
        })
    }

    const searchUser = async (text) => {
        await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).
        then((res)=>{
            setUsers(res.data.items);
        })
    }

    const clearUser = () => {
        getInitialUsers()
    }

    useEffect(()=>{
        getInitialUsers()
    },[])
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<>
                                            <Form searchUser={searchUser} clearUser={clearUser}/>
                                            <Users users={users}/>
                                        </>}/>
                <Route path="/about" element={<h1>About</h1>}/>
                <Route path="/user" element={<SingleUserView/>}/>
            </Routes>
        </Router>
    )
}

export default GitFinder

import React from 'react'
import SingleUserCard from './SingleUserCard'

function Users(props) {
    return (
        <div className="container">
            <div className="row d-flex justify-content-between">
            {props.users.map(user => (
                <SingleUserCard key = {user.id} user={user}/>
            ))}
            </div>
        </div>
    )
}

export default Users

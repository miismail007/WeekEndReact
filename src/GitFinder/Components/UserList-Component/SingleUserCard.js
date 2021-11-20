import React from 'react'
import { Link } from 'react-router-dom'

function SingleUserCard(props) {
    return (
        <div className="card col-md-6">
            <div className="card-body text-center">
                <img src={props.user.avatar_url} style={{width:100,borderRadius:100}} className="img-rounded"/>
                <h4 className="card-title">{props.user.login}</h4>
                <Link to={`/user?userName=${props.user.login}`} className="btn btn-primary" onClick={()=>{
                    
                }}>More</Link>
            </div>
        </div>
    )
}

export default SingleUserCard

import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router';

function SingleUserView(props) {
    // const { login } = useParams()
    const getsingleuser = async () => {
        const urlParamList = new URLSearchParams(window.location.search)
        const userName = urlParamList.get('userName')
        const datas = await axios.get(
          `https://api.github.com/users/${userName}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        console.log(datas.data);
    };

    useEffect(()=>{
        
        getsingleuser()
    },[])
    return (
        <div>
            <h1>SingleUserView</h1>    
        </div>
    )
}

export default SingleUserView

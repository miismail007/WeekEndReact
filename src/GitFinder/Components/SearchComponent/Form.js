import React, { useState } from 'react'

function Form(props) {
    const [input , setInput] = useState('')
    const [ clearView , setClearView ] = useState(false)
    return (
        <div className="container">
            <div className="form">
                <input type="text" className="w-100 mt-2 mb-2" value={input} onChange={(text)=>{setInput(text.target.value)}}/>
                <button className="btn btn-block btn-info mb-2" onClick={()=>{
                    props.searchUser(input)
                    setClearView(true)
                    setInput("")
                }}>Search</button>
                {clearView && <button className="btn btn-block mb-2" onClick={()=>{
                    props.clearUser()
                    setClearView(false)
                    setInput("")
                }}>Clear</button>}
            </div>
        </div>
    )
}

export default Form

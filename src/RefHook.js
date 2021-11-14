import React, { useState ,useRef, useEffect } from 'react'

function RefHook() {
    let inputone = useRef()
    useEffect(()=>{
        console.log("side Effect");
    })
    return (
        <div>
            <input type="text" ref={inputone} style={{width:100}}/>
            <input type="text"/>
            <button onClick={()=>{
                // setWidth(200)
                inputone.current.style.width = "300px"
            }}>inputOne btn</button>
            <button>inputTwo btn</button>
        </div>
    )
}

export default RefHook

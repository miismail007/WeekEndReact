import React from 'react'
import { useState } from 'react/cjs/react.development'

function Form(props) {
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState("")
    return (
        <div className="container">
            <div class="form-group">
                <label for="email">Email Name:</label>
                <input type="text" class="form-control" value={name} onChange={(text)=>{
                    setName(text.target.value);
                }} placeholder="Enter Name" id="email"/>
            </div>
            <div class="form-group">
                <label for="email">Email Description:</label>
                <input type="text" class="form-control" value={description} onChange={(text)=>{
                    setDescription(text.target.value);
                }} placeholder="Enter Name" id="email"/>
            </div>
            <div class="form-group">
                <label for="email">Email Price:</label>
                <input type="text" class="form-control" value={price} onChange={(text)=>{
                    setPrice(text.target.value);
                }} placeholder="Enter Name" id="email"/>
            </div>
            <button type="submit" class="btn btn-primary" onClick={()=>{
                const obj = {
                    name:name,
                    description:description,
                    price:price
                }
                props.setProducttoState(obj)
            }}>Submit</button>
        </div>
    )
}

export default Form

import React, { Component } from 'react'
import Card from './Card'

export class ClassComponent extends Component {
    state = {
        count : 0,
        text : "",
        card : false
    }


    render() {
        return (
            <div>
                <h1>{this.state.text} {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({count : this.state.count+1})
                }}>Increment</button>
                <button onClick={()=>{
                    this.setState({count : this.state.count-1})
                }}>Decrement</button>
                <input onChange={(text)=>{
                    this.setState({text : text.target.value})
                }}/>
                <button onClick={()=>{
                    this.setState({card : !this.state.card})
                }}>click</button>
                {this.state.card && <Card/>}
            </div>
        )
    }
}

export default ClassComponent

import React, { Component } from 'react'

export class Card extends Component {
    componentDidMount(){
        console.log("mount");
    }
    componentWillUnmount(){
        console.log("unmount");
    }
    render() {
        return (
            <div>
                <h1>card</h1>
            </div>
        )
    }
}

export default Card

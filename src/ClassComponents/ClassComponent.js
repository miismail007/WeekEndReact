import React, { Component } from 'react'

export class ClassComponent extends Component {
    state = {
        data : 0
    }

    render() {
        return (
            <div>
                <button onClick = {()=>{
                    this.setState({data: this.state.data + 1})
                }}>INCREMENT</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        )
    }
}

export default ClassComponent

class Content extends React.Component {
    state = {
        data:0
    }
 componentWillMount() {
    console.log('Component WILL MOUNT!')
 }
 componentDidMount() {
    console.log('Component DID MOUNT!')
 }
 componentWillReceiveProps(newProps) {    
     this.setState({data: this.state.data + 1})
    console.log('Component WILL RECIEVE PROPS!',newProps)
 }
 componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!',nextProps,nextState);
 }
 componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!',prevProps,prevState)
 }
 componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
 }
 render() {
    return (
       <div>
          <h3>{this.props.myNumber}</h3>
       </div>
    );
 }
}

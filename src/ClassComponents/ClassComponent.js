import React, { Component } from 'react'

export class ClassComponent extends Component {
    state = {
        data : 0
    }

   componentWillMount() {
      console.log('befor Component came into tree!')
   }
   componentDidMount() {
      console.log('after Component came into tree!')
   }
   componentWillUnmount(){
      console.log('Component removed from tree');
   }

   componentWillReceiveProps(newProps) {    
      console.log('When recieving new prop update',newProps)
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('before component update',nextProps,nextState);
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('after component update',prevProps,prevState)
   }

    render() {
        return (
            <div>
                <button onClick = {()=>{
                    this.setState({data: this.state.data + 1})
                }}>INCREMENT</button>
               <h1>{this.state.data}</h1>
            </div>
        )
    }
}

export default ClassComponent

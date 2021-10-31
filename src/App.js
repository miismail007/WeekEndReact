import React, { useState } from 'react'
import Form from './Components/Form-Component/Form';
import Header from './Components/Header-Component/Header'
import Products from './Components/Products-Component/Products';

function App() {
  const [logo , setLogo ] = useState("Fita")
  const [menu , setMenu ] = useState(['Home' , 'About' , 'Contact' , 'Gallery'])
  const [products , setProducts] = useState([])
  const [counter , setCounter] = useState(0)

  const setProducttoState = (obj) => {
    setProducts([...products,obj])
  }
  return (
    <div>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>increment</button>
      <button onClick={()=>{
        setCounter(counter-1)
      }}>decrement</button>
      <h1>{Counter}</h1>
      <Header logo = {logo} menu = {menu}/>
      <Form setProducttoState={setProducttoState}/>
      <Products products = {products}/>
    </div>
  )
}

export default App

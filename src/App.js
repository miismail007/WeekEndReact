import React , { useEffect, useState } from 'react'
import ClassComponent from './ClassComponents/ClassComponent';
import From from './Components/Form-Component/From';
import Header from './Components/Header-Component/Header'
import Products from './Components/Products-component/Products'
import RefHook from './RefHook';
import RouterDom from './RouterDom';

function App() {
  const [ logo , setLogo ] = useState("Fita");
  const [ menu , setMenu ] = useState(['Home', 'About', 'Contacts'])
  const [ products , setProduct ] = useState([])
  const [ formData , setFormData ] = useState({})

  const setProductToState = (changeStatus,obj) => {
    if(changeStatus == 'add'){
      setProduct([...products,obj])
    }else{
      let newProducts = products
      newProducts.map(prod =>{ 
        if(obj.id === prod.id){
          prod.name = obj.name
          prod.description = obj.description
          prod.price = obj.price
        }
      })
      setProduct(newProducts);
      setFormData({})
    }
    

  }

  useEffect(()=>{
    let data = fetch("https://api.github.com/users")
    data.then(res=>{
      res.json().then(d=>{
        console.log(d);
      })
    })
  },[products])

  const deleteProduct = (id) => {
    var newProduct = []
    products.map(product => {
      if(id !== product.id){
        newProduct.push(product)
      }
    })
    setProduct(newProduct)
  }

  const updateProduct = (id) => {
    let singleProduct = {}
    products.map(product=>{
      if(id === product.id){
        singleProduct = product
      }
    })
    setFormData(singleProduct);
  }

  return (
    <div>
      {/* <Header logo={logo} menu = {menu}/> */}
      {/* <From setProductToState = {setProductToState} formData={formData}/> */}
      {/* <Products products={products} deleteProduct={deleteProduct} updateProduct={updateProduct}/> */}
      {/* <ClassComponent/> */}
      <RouterDom/>
      {/* <RefHook/> */}
    </div>
  )
}

export default App

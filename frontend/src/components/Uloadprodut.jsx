import React, { useState } from 'react'
import axios from 'axios'

const Uloadprodut = () => {
    const [product, setproduct] = useState({
        productName:"",
        productPrice:"",
        productDescription:"",
        productCategory:"",
        productUrl:[]
    })
  
    const handleOnChange = (e) =>{
        let name = e.target.name
        
        setproduct({...product, [name]:e.target.value})
        console.log(product);
    }

    const handleFileOnChange =(e)=>{
        let file = e.target.files 
           let filereaders = []
        Array.from(file).map((image) =>{
            console.log(image);
            let reader = new FileReader()
            reader.readAsDataURL(image)
            reader.onload = (e) =>{
              filereaders.push(e.target.result)
            }
                
       })
         setproduct({...product,productUrl:filereaders })
          
    }

    const Addproduct = () =>{
     axios.post("http://localhost:6002/user/uploadproduct",product)
     .then((res)=>{
        console.log(res);
        
     }).catch((err)=>{
        console.log(err);
        
     })
    }
  return (
   
    <div>
        <form action="">
            <input onChange={handleOnChange} type="text" name="productName" id="" />
            <input  onChange={handleOnChange}  type="number" name="productPrice" id="" />
            <input  onChange={handleOnChange} type="text" name="productCategory" id="" />
            <input  onChange={handleOnChange}  type="text" name="productDescription" id="" />
            <input  onChange={handleFileOnChange} multiple  type="file" name="ProductUrl" id="" />
            <button onClick={Addproduct}>Add Product</button>
        </form>
    </div>
  )
}

export default Uloadprodut
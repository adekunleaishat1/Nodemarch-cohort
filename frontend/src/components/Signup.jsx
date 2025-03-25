import React,{useState} from 'react'
import axios from 'axios'
const Signup = () => {
    const [userdetail, setUserdetail] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
    })
    const Registeruser = () =>{
        console.log(userdetail)
        axios.post("http://localhost:6002/user/signup",userdetail)
        .then((res)=>{
            console.log(res); 
        }).catch((err)=>{
            console.log(err);
        })  
    }

  return (
    <div >      
      <div className='w-50 mx-auto shadow px-3 py-3'>
        <h1 className='text-center mb-2'>Sign up</h1>
        <div className='form-group'>
            <label htmlFor="">Firstname</label>
            <input onChange={(e)=> setUserdetail({...userdetail, firstname:e.target.value})}  className='form-control' type="text" />
        </div>
        <div className='form-group mt-3'>
            <label htmlFor="">Lastname</label>
            <input onChange={(e)=> setUserdetail({...userdetail, lastname:e.target.value})} className='form-control' type="text" />
        </div>
        <div className='form-group mt-3'>
            <label htmlFor="">Email</label>
            <input onChange={(e)=> setUserdetail({...userdetail, email:e.target.value})} className='form-control' type="email" />
        </div>
        <div className='form-group mt-3'>
            <label htmlFor="">Password</label>
            <input onChange={(e)=> setUserdetail({...userdetail, password:e.target.value})} className='form-control' type="password" />
        </div>
        <div> 
            <button onClick={Registeruser}>Register</button>
        </div>
    </div>
        
    </div>
  )
}

export default Signup
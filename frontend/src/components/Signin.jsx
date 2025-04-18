import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate , Link} from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate()
    const [userdetail, setUserdetail] = useState({
        email: "",
        password:""
    })
    const Loginuser =() =>{
        console.log(userdetail)
        axios.post("http://localhost:6002/user/login",userdetail)
        .then((res)=>{
            console.log(res);
            localStorage.setItem("token",res.data.token )
            navigate("/dashboard")
        }).catch((err)=>{
            console.log(err);
            
        })
    }
  return (
    <div>
         <div className='w-50 mx-auto shadow px-3 py-3'>
        <h1 className='text-center mb-2'>Sign In</h1>
        <div className='form-group mt-3'>
            <label htmlFor="">Email</label>
            <input onChange={(e)=> setUserdetail({...userdetail, email:e.target.value})} className='form-control' type="email" />
        </div>
        <div className='form-group mt-3'>
            <label htmlFor="">Password</label>
            <input onChange={(e)=> setUserdetail({...userdetail, password:e.target.value})} className='form-control' type="password" />
        </div>
        <div> 
            <button onClick={Loginuser}>Login</button>
        </div>
        <Link to="/forgotpassword">Forgot Password</Link>
    </div>
    </div>
  )
}

export default Signin
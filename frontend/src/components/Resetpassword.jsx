import axios from 'axios';
import React,{useState} from 'react'
import { useParams } from 'react-router-dom'

const Resetpassword = () => {
    const {otp} = useParams()
    console.log(otp);
    
    const [newpassword, setpassword] = useState({
        password:"",
        c_password:""
    })

    const resetpassword = () =>{
        const {password , c_password,} = newpassword
        if (password !== c_password) {
            alert("password does not match");
            
        }else{
            axios.post("http://localhost:6002/user/reset", {otp, newpassword})
            .then((res)=>{
                console.log(res);
                
            }).catch((err)=>{
                console.log(err);
                
            })
        }
    }
  return (
    <div className='w-50 mx-auto px-3 py-3 shadow'>
       <div className='form-group'>
        <label htmlFor="">New Password</label>
        <input className='form-control mt-3' onChange={(e)=> setpassword({...newpassword,password:e.target.value})} type="text" />
       </div>
       <div className='form-group'>
          <label htmlFor="">Confirm Password</label>
          <input className='form-control mt-3' onChange={(e)=> setpassword({...newpassword, c_password:e.target.value})} type="text" />
       </div>
       <button onClick={resetpassword}>
        Reset Password
       </button>
    </div>
  )
}

export default Resetpassword
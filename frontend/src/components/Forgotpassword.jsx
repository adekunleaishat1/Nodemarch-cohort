import axios from 'axios';
import React ,{useState}from 'react'

const Forgotpassword = () => {
    const [email, setemail] = useState("")
    const Sendmail = () =>{
        console.log(email);
        axios.post("http://localhost:6002/user/forgot",{email})
        .then((res)=>{
            console.log(res);
            
        }).catch((err)=>{
            console.log(err);
            
        })
    }
  return (
    <div className='w-50 mx-auto'>
       <div className='form-group'>
        <label htmlFor="">Email Address</label>
        <input className='form-control mt-3' onChange={(e)=> setemail(e.target.value)} type="text"  />
       </div>
       <button onClick={Sendmail}>Send Mail</button>
    </div>
  )
}

export default Forgotpassword
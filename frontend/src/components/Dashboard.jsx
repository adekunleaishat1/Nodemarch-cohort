import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
    let token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [data, setData] = useState()
    const [imagefile, setImagefile] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:6002/user/verify",{
          headers:{
            'Authorization': `Bearer ${token}`
          }
        })
        .then(response =>{
         console.log(response.data.user)
         setData(response?.data?.user)
        }).catch((err)=>{
            console.log(err?.response?.data?.message)
            const errormessage = err?.response?.data?.message
            if (errormessage ) {
              navigate("/login")
            }
        })
        
    }, [])
    
    const handleimagefile = (e) =>{
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) =>{
         console.log(e.target.result);
         if (e.target.result) {
          setImagefile(e.target.result)
         }
      }
    }
   
    const Uploadprofile = ()=>{
       axios.post("http://localhost:6002/user/upload",{imagefile,email:data.email})
       .then((res)=>{
        console.log(res);
        
       }).catch((err)=>{
        console.log(err);
       })
    }
  return (
    <div>
      <h1>Welcome to your Dashboard {data && data.firstname}</h1>
      <input onChange={handleimagefile} type="file" />
      <button onClick={Uploadprofile}>Upload</button>
    </div>
  )
}

export default Dashboard
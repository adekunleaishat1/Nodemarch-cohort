import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
    let token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [data, setData] = useState()
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
            
        })
        // if (!token) {
        //     navigate("/login")
        //   }
    }, [])
    
   
  return (
    <div>
      <h1>Welcome to your Dashboard {data.firstname}</h1>
    </div>
  )
}

export default Dashboard
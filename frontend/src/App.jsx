import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Dashboard from './components/Dashboard'
import Uloadprodut from './components/Uloadprodut'
import Forgotpassword from './components/Forgotpassword'
import Resetpassword from './components/Resetpassword'
import socketClient from "socket.io-client"
import { useRef } from 'react'
import Chat from './components/Chat'

const App = () => {
  const endpoint = "http://localhost:6002"
   const socket = useRef(socketClient(endpoint))


  return (
    <div>
     <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/forgotpassword" element={<Forgotpassword />} />
      <Route path="/resetpassword/:otp" element={<Resetpassword />} />
      <Route path="/upload" element={<Uloadprodut />} />
      <Route path="/chat" element={<Chat socket={socket.current} />} />
     </Routes>
    </div>
  )
}

export default App
import React ,{useState}from 'react'

const Chat = ({socket}) => {
    const [message, setmessage] = useState("")
    const [allmessage, setallmessage] = useState([])
    const send = () =>{
        let messages = {
            message
        }
        socket.emit("sendmessage",messages)
    }
    

    socket.on("receive",(message)=>{
       console.log(message);
       setallmessage([...allmessage, message])
    })

    socket.on("allchat",(allchat)=>{
        console.log(allchat);
        setallmessage(allchat)
    })
  return (
    <div>
     <input onChange={(e)=> setmessage(e.target.value)} type="text" />
     <button onClick={send}>Send message</button>

     {allmessage.map((el)=>(
        <>
        <h1 className='bg-primary text-white px-3 py-3 rounde-md'>{el.message}</h1>
        </>
     ))}
    </div>
  )
}

export default Chat
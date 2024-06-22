import { useEffect, useState } from "react"
import Shan from "./Shan"


function App() {

  const [change,setChange]=useState(0)
  const [click,setClick]=useState(false)
  console.log(click)
  useEffect(()=>{
   setChange(Math.random())
  },[click])


  return (
    <div style={containerStyle}>
      <p>{change}</p>
     <h1>Calculator</h1>
     <button onClick={()=>{setClick(prev=>!prev)}}>change</button>
     <Shan />
     
    </div>
  )
}

const containerStyle={
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  flexDirection: 'column',
}

export default App

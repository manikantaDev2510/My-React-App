import React, { useState } from 'react'

export default function Signup() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }
  return (
    <div>Signup
        <form onSubmit={handleSubmit}>
        <input type="email" name="" placeholder="enter email here" onChange={(e)=>setEmail(email.target)} value={email}/>
        <input type="password" name="" placeholder="enter password here" onChange={(e)=>setPassword(password.target)} value={password}/>
        <button>Signup</button>
        </form>
    </div>
  )
}

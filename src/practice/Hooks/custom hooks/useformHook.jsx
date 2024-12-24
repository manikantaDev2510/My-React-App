import React, { useState } from 'react'

export default function useformHook() {
    const [user,setUser]=useState("")
    const handleChange=(e)=>{
        setUser(e.target.value)
    }
  return handleChange;
}
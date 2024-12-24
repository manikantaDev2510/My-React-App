import React, { useState } from "react";
import Display from "./Display";

export default function Buttoncount(){
    const [value,setValue]=useState(0);
    const [random,setRandom]=useState(0);
    const handleIncrement=()=>{
        setValue(value+1)
    }
    const handleRandom=()=>{
        setRandom(Math.random())
    }
    return(
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleRandom}>Random</button>
            <h1>{random}</h1>
            {/* <h1>{value}</h1> */}
            <Display value={value}/>
        </div>
    )
}
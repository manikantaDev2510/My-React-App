import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UseEffect() {
    const [value, SetValue] = useState(0);
    const [message, setMessage] = useState("hii");
    const[display,setDisplay]=useState("a");
    const handleMessage = () => {
        setMessage(message + "10k");
    };
    const handleDisplay=()=>{
        setDisplay(display+"1")
    }
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setDisplay(display+res.date[0].title)
        })
    });
    return (
        <div>
            <h1>Value:{value}</h1>
            <h1>Message:{message}</h1>
            <h1>Displat:{display}</h1>
            <button onClick={handleMessage}>Click me</button>
            <button onClick={handleDisplay}>display</button>
        </div>
    );
}

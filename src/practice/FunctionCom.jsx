import React from "react";
import { useState } from "react";

export default function FuncLifeCycle() {
  const [text, setText] = useState("hii"); //it is intialise state
  const handlebutton=()=>{
    setText("hello")
  }
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handlebutton}>Click me</button>
    </div>
  );
}

// useState is the hook of functional component
// used to intialise/update/access the state

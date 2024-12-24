import React from "react";

export default function ButtonComp(props){
    const{name,onClick}=props
    return(
        <div>
            <button onClick={onClick}>{name}</button>
        </div>
    )
}
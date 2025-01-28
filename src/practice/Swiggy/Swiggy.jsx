import React, { Component } from "react";
import Admin from "./Admin";
import User from "./User";
import Delevery from "./Delevery";

// This is normal function
function Swiggy(props){
    return props.login==="Admin"?<Admin/>:props.login==="User"?<User/>:<Delevery/>
}


//// This is by using class
// class Swiggy extends Component{
//     render(){
//         return this.props.login==="Admin"?<Admin/>:this.props.login==="User"?<User/>:<Delevery/>
//     }
// }

export default Swiggy;
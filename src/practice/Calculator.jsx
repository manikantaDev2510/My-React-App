// import React,{ Component } from "react";

// class Counter extends Component{
//     constructor(){
//         super();
//         this.state={counter:1,color:"red"}
//     }
//     handle1=()=>{
//         this.setState({counter:this.state.counter+1})
//     }
//     handle2=()=>{
//         this.setState({counter:this.state.counter+2})
//     }
//     handle3=()=>{
//         this.setState({counter:this.state.counter+3})
//     }
//     handle4=()=>{
//         this.setState({counter:this.state.counter+4})
//     }
//     handle5=()=>{
//         this.setState({counter:this.state.counter+5})
//     }
//     handle6=()=>{
//         this.setState({counter:this.state.counter+6})
//     }
//     handle7=()=>{
//         this.setState({counter:this.state.counter+7})
//     }
//     handle8=()=>{
//         this.setState({counter:this.state.counter+8})
//     }
//     handle9=()=>{
//         this.setState({counter:this.state.counter+9})
//     }
//     handle0=()=>{
//         this.setState({counter:this.state.counter+0})
//     }


//     handleSub=()=>{
//         this.setState({counter:this.state.counter-1})
//     }
//     handleAdd=()=>{
//         this.setState({counter:this.state.counter-2})
//     }
//     handleMul=()=>{
//         this.setState({counter:this.state.counter-3})
//     }
//     handleDiv=()=>{
//         this.setState({counter:this.state.counter-3})
//     }
//     handleMod=()=>{
//         this.setState({counter:this.state.counter-3})
//     }
//     handleDel=()=>{
//         this.setState({counter:this.state.counter-3})
//     }
//     handleCle=()=>{
//         this.setState({counter:this.state.counter-3})
//     }
//     handleEqu=()=>{
//         this.setState({counter:this.state.counter-3})
//     }


//     render(){
//         return(
//             <div>
//                 <button onClick={this.handle1}>1</button>
//                 <button onClick={this.handle2}>2</button>
//                 <button onClick={this.handle3}>3</button>
//                 <button onClick={this.handle4}>4</button>
//                 <button onClick={this.handle5}>5</button>
//                 <button onClick={this.handle6}>6</button>
//                 <button onClick={this.handle7}>7</button>
//                 <button onClick={this.handle8}>8</button>
//                 <button onClick={this.handle9}>9</button>
//                 <button onClick={this.handle0}>0</button>

//                 <h1 style={{color:this.state.color}}>{this.state.counter}</h1>

//                 <button onClick={this.handle01}>-</button>
//                 <button onClick={this.handle02}>+</button>
//                 <button onClick={this.handle03}>*</button>
//                 <button onClick={this.handle03}>/</button>
//                 <button onClick={this.handle03}>%</button>
//                 <button onClick={this.handle03}>Delete</button>
//                 <button onClick={this.handle03}>Clear</button>
//                 <button onClick={this.handle03}>=</button>
//             </div>
//         )
//     }
// }
// export default Counter;




// import React, { Component } from "react";

// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = { counter: 1, color: "red" };
//   }

//   // Handlers for numbers
//   handle1 = () => {
//     this.setState({ counter: this.state.counter * 10 + 1 });
//   };
//   handle2 = () => {
//     this.setState({ counter: this.state.counter * 10 + 2 });
//   };
//   handle3 = () => {
//     this.setState({ counter: this.state.counter * 10 + 3 });
//   };
//   handle4 = () => {
//     this.setState({ counter: this.state.counter * 10 + 4 });
//   };
//   handle5 = () => {
//     this.setState({ counter: this.state.counter * 10 + 5 });
//   };
//   handle6 = () => {
//     this.setState({ counter: this.state.counter * 10 + 6 });
//   };
//   handle7 = () => {
//     this.setState({ counter: this.state.counter * 10 + 7 });
//   };
//   handle8 = () => {
//     this.setState({ counter: this.state.counter * 10 + 8 });
//   };
//   handle9 = () => {
//     this.setState({ counter: this.state.counter * 10 + 9 });
//   };
//   handle0 = () => {
//     this.setState({ counter: this.state.counter * 10 });
//   };

//   // Handlers for operations
//   handleSub = () => {
//     this.setState({ counter: this.state.counter - 1 });
//   };
//   handleAdd = () => {
//     this.setState({ counter: this.state.counter + 2 });
//   };
//   handleMul = () => {
//     this.setState({ counter: this.state.counter * 3 });
//   };
//   handleDiv = () => {
//     this.setState({ counter: Math.floor(this.state.counter / 3) });
//   };
//   handleMod = () => {
//     this.setState({ counter: this.state.counter % 3 });
//   };
//   handleDel = () => {
//     const counterStr = this.state.counter.toString();
//     const newCounter = counterStr.length > 1 ? parseInt(counterStr.slice(0, -1)) : 0;
//     this.setState({ counter: newCounter });
//   };
//   handleCle = () => {
//     this.setState({ counter: 0 });
//   };
//   handleEqu = () => {
//     // Dummy handler for "equals" button; extend as needed
//     alert("Equals clicked (no functionality defined yet)");
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handle1}>1</button>
//         <button onClick={this.handle2}>2</button>
//         <button onClick={this.handle3}>3</button>
//         <button onClick={this.handle4}>4</button>
//         <button onClick={this.handle5}>5</button>
//         <button onClick={this.handle6}>6</button>
//         <button onClick={this.handle7}>7</button>
//         <button onClick={this.handle8}>8</button>
//         <button onClick={this.handle9}>9</button>
//         <button onClick={this.handle0}>0</button>

//         <h1 style={{ color: this.state.color }}>{this.state.counter}</h1>

//         <button onClick={this.handleSub}>-</button>
//         <button onClick={this.handleAdd}>+</button>
//         <button onClick={this.handleMul}>*</button>
//         <button onClick={this.handleDiv}>/</button>
//         <button onClick={this.handleMod}>%</button>
//         <button onClick={this.handleDel}>Delete</button>
//         <button onClick={this.handleCle}>Clear</button>
//         <button onClick={this.handleEqu}>=</button>
//       </div>
//     );
//   }
// }

// export default Counter;

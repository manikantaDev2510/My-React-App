import React,{ Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state={counter:1,color:"red"}
    }
    handle1=()=>{
        this.setState({counter:this.state.counter+1, color:"blue"})
    }
    handle2=()=>{
        this.setState({counter:this.state.counter+2, color:"green"})
    }
    handle3=()=>{
        this.setState({counter:this.state.counter+3, color:"pink"})
    }
    handle01=()=>{
        this.setState({counter:this.state.counter-1, color:"aqua"})
    }
    handle02=()=>{
        this.setState({counter:this.state.counter-2, color:"gray"})
    }
    handle03=()=>{
        this.setState({counter:this.state.counter-3, color:"brown"})
    }

    render(){
        return(
            <div>
                <button onClick={this.handle1}>+1</button>
                <button onClick={this.handle2}>+2</button>
                <button onClick={this.handle3}>+3</button>
                <h1 style={{color:this.state.color}}>{this.state.counter}</h1>
                <button onClick={this.handle01}>-1</button>
                <button onClick={this.handle02}>-2</button>
                <button onClick={this.handle03}>-3</button>
            </div>
        )
    }
}
export default Counter;
import React, { Component } from "react";

class Form extends Component {
  // constructor(){
  //     super();
  //     this.state={text:this.formsubmission}
  // }
  // formsubmission=(e)=>{
  //     e.preventDefault();
  //     this.setState({text:e.target.id.value})
  // }
  // render(){
  //     return(
  //         <div>
  //             <form onSubmit={this.formsubmission}>
  //                 <input id="id" type="text" />
  //                 <input type="submit" />
  //             </form>
  //             <h1>{this.state.text}</h1>
  //         </div>
  //     )
  // }

  constructor() {
    super();
    this.state = { fname: "", sname: "", mob: "", fullname: "" };
  }
  handlechange = (event) => {
    const { name, value } = event.target; // Destructures the `name` and `value` properties from the event target
    this.setState({ [name]: value }); // Dynamically updates the state with the new value for the corresponding `name`
  };
  handlesubmit = (event) => {
    event.preventDefault();
    this.setState({
      fullname: this.state.fname + this.state.sname + this.state.mob,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handlesubmit}>
          <input type="text" name="fname" onChange={this.handlechange} />
          <input type="text" name="sname" onChange={this.handlechange} />
          <input type="text" name="mob" onChange={this.handlechange} />
          <input type="submit" />
        </form>
        <h1>{this.state.fullname}</h1>
      </div>
    );
  }
}

export default Form;

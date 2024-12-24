import React, { Component } from "react";
import "./Switch.css"

class Switch extends Component {
    constructor() {
        super();
        this.state = { ison: true };
    }
    handlebutton = () => {
        this.setState({ ison: !this.state.ison });
    };
    render() {
        return (
            <div>
                <button onClick={this.handlebutton} className={this.state.ison?"switchon":"switchoff"}>
                    {this.state.ison ? <h1>SWITCH OFF</h1> : <h1>SWITCH ON</h1>}
                </button>
                <h1 className={this.state.ison?"texton":"textoff"}>
                    {this.state.ison ? (
                        <h1>Please SWITCH ON</h1>
                    ) : (
                        <h1>Please SWITCH OFF</h1>
                    )}
                </h1>
            </div>
        );
    }
}

export default Switch;

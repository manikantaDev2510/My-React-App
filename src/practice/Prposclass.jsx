import React, { Component } from "react";

class Propsclass extends Component {
    render(props) {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        );
    }
}
export default Propsclass;
// Like this we access props in class
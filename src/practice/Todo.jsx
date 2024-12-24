import React, { Component } from "react";

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todo: "",
            list: []
        }
    }
    handlechange = (event) => {
        this.setState({ todo: event.target.value })
    }
    handlesubmit = (e) => {
        e.preventDefault();
        this.setState((prevstate) => ({
            list: [...prevstate.list, prevstate.todo],
            todo: "",
        }))
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <input type="text" name="todo" id="todo" value={this.state.todo} onChange={this.handlechange} />
                    <input type="submit" />
                </form>
                <ul>
                    {this.state.list.map((a, b) => {
                        return (
                            <li key={b}>{a}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Todo;
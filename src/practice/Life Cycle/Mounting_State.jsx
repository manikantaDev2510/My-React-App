import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Spinner from "react-bootstrap/Spinner";


class MountingState extends Component {
    constructor() {
        super();
        console.log("Constructing");
        this.state = { products: [] };
        // this.state = { products: [], isLoading: true };
    }

    componentDidMount() {
        console.log("Mounting");
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => { this.setState({ products: json }) });
            // .then((json) => { this.setState({ products: json, isLoading: false });});
    }

    static getDerivedStatesFromProps() {
        console.log("Statedderiving from props");
        return null;
    }

    render() {
        console.log("rendering");
        return (
            <div>
                <h1 style={{color:"white", backgroundColor:"black", textAlign:"center"}}>This is for Mounting State</h1>
                <div style={{
                    display:"flex",
                    justifyContent:"center",
                    gap:"10px",
                    flexWrap:"wrap"
                }}>
                    {this.state.products.map((a, b) => {
                        return (
                            <Card style={{ width: "20rem" }}>
                                <Card.Img
                                    variant="top"
                                    src={a.image}
                                    style={{ height: "300px" }}
                                />
                                <Card.Body>
                                    <Card.Title style={{ height: "100px" }}>{a.title}</Card.Title>
                                    <Card.Text style={{ height: "300px" }}>{a.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">     <Button variant="primary">Go somewhere</Button>
                                </Card.Footer>
                            </Card>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default MountingState;
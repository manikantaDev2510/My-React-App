import React, { Component } from "react";
import axios from "axios";
import Profilecart from "../Profilecart";
import { Spinner } from "react-bootstrap"; // Ensure you're using only one import

class UpdatingState extends Component {
  constructor() {
    super();
    this.state = { count: 0, product: null, loading: false, error: null };
  }

  componentDidUpdate(prvsProps, prvsState) {
    if (prvsState.count !== this.state.count) {
      console.log(`count value updated to ${this.state.count}`);
      this.setState({ loading: true, error: null }); // Reset loading and error before fetching
      axios
        .get(`https://fakestoreapi.com/products/${this.state.count}`)
        .then((res) => {
          this.setState({ product: res.data, loading: false });
        })
        .catch((err) => {
          console.error(err);
          this.setState({ error: "Failed to fetch product", loading: false });
        });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count >= 10) {
      return false; // Prevent state update if count reaches 10
    }
    return true;
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { count, product, loading, error } = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement} disabled={count <= 0}>
          Decrement
        </button>

        <div>
          {loading ? (
            <Spinner animation="border" />
          ) : error ? (
            <div>{error}</div>
          ) : (
            product && <Profilecart title={product.title} />
          )}
        </div>
      </div>
    );
  }
}

export default UpdatingState;

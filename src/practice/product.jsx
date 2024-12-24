import { Component } from "react";
import "./product.css";
import mobile from "../assets/images/iphone.jpg";
import laptop from "../assets/images/lpt3.jpg";
import camera from "../assets/images/cam1.jpeg";
import watch from "../assets/images/watch2.jpeg"

const product = [{
    productName: "Mobile",
    productPrice: 55000,
    productAvailability: true,
    image:mobile,
},
{
    productName: "Laptop",
    productPrice: 55000,
    productAvailability: true,
    image:laptop,
},
{
    productName: "Camera",
    productPrice: 55000,
    productAvailability: true,
    image:camera,
},
{
    productName: "Watch",
    productPrice: 55000,
    productAvailability: true,
    image:watch,
}];

class Product extends Component {
    render() {
        return (
            <div className="main">
                <div style={product[0].productAvailability?style.available:style.unavailable}> 
                    <h1>{product[0].productName}</h1>
                    <img src={product[0].image} />
                    <h1>{product[0].productPrice}</h1>
                </div>
                <div style={product[0].productAvailability?style.available:style.unavailable}>
                    <h1>{product[1].productName}</h1>
                    <img src={product[1].image} />
                    <h1>{product[1].productPrice}</h1>
                </div>
                <div style={product[0].productAvailability?style.available:style.unavailable}>
                    <h1>{product[2].productName}</h1>
                    <img src={product[2].image} />
                    <h1>{product[2].productPrice}</h1>
                </div>
                <div style={product[0].productAvailability?style.available:style.unavailable}>
                    <h1>{product[3].productName}</h1>
                    <img src={product[3].image} />
                    <h1>{product[3].productPrice}</h1>
                </div>
            </div>
        );
    }
}

const style = {
    available: { color: "green",backgroundColor:"aqua" },
    unavailable: { color: "red",backgroundColor:"yellow" },
};
export default Product;

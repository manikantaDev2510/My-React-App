import React from "react";
import "./Amazon.css";
import image1 from "../assets/images/iphone.jpg";
import image2 from "../assets/images/galaxy.jpg";
import image3 from "../assets/images/vivo.jpg";
import image4 from "../assets/images/cam1.jpeg";
import image5 from "../assets/images/cam2.jpeg";
import image6 from "../assets/images/cam3.jpeg";
import image7 from "../assets/images/watch1.jpeg";
import image8 from "../assets/images/watch2.jpeg";
import image9 from "../assets/images/watch3.jpeg";
import image10 from "../assets/images/Laptop.jpeg";
import image11 from "../assets/images/Laptop2.jpg";
import image12 from "../assets/images/Laptop3.jpg";

function Amazon() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header style={styles.header}>
      <h1>
        <a href="#mobile" style={{ textDecoration: "none" }}>
          Mobiles
        </a>
      </h1>
      <h1>
        <a href="#electronic" style={{ textDecoration: "none" }}>
          Cameras
        </a>
      </h1>
      <h1>
        <a href="#accessories" style={{ textDecoration: "none" }}>
          Watches
        </a>
      </h1>
      <h1>
        <a href="#books" style={{ textDecoration: "none" }}>
          Laptops
        </a>
      </h1>
    </header>
  );
}

function Main() {
  return (
    <table>
      <tr id="mobile">
        <td>
          <img src={image1} />
        </td>
        <td>
          <img src={image2} />
        </td>
        <td>
          <img src={image3} />
        </td>
      </tr>
      <tr id="electronic">
        <td>
          <img src={image4} />
        </td>
        <td>
          <img src={image5} />
        </td>
        <td>
          <img src={image6} />
        </td>
      </tr>
      <tr id="accessories">
        <td>
          <img src={image7} />
        </td>
        <td>
          <img src={image8} />
        </td>
        <td>
          <img src={image9} />
        </td>
      </tr>
      <tr id="books">
        <td>
          <img src={image10} />
        </td>
        <td>
          <img src={image11} />
        </td>
        <td>
          <img src={image12} />
        </td>
      </tr>
    </table>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2024 My Website. All rights reserved.</p>
      <p>+91 63056 78598</p>
    </footer>
  );
}

const styles = {
  main: {
    padding: "20px",
    textAlign: "center",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "15px",
  },
  image: {
    width: "150px",
    height: "150px",
    margin: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
};

export default Amazon;
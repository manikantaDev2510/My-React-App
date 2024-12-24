// We can save our files in .js or in .jsx Both are same

// This is for nested components
import { Component } from "react";
import Footer from "./footerComp";
import HeaderComp from "./headerComp";
import Mani from "./mainComp";

class Home extends Component {
  render() {
    return (
      <>
        <HeaderComp />
        <Mani/>
        <Footer />
      </>
    );
  }
}
export default Home;

import { Component } from "react";
import back from "../../assets/images/galaxy.jpg"
// This is for importing image

class Mani extends Component {
  render() {
    return (
      <>
        <img src={back} style={{height:"500px",width:"500px"}}></img>
      </>
    );
  }
}
export default Mani
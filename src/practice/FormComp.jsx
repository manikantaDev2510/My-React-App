import React, { useState } from "react";
import MyVerticallyCenteredModal from "./ModelComp"

export default function FormComp() {
  // const [user, setUser] = useState("");
  // const [result, setResult] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [formData, setFormData] = useState({
    user: "",
    mobile: "",
    email: "",
  });
  const handleInput = (e) => {
    // setUser(e.target.value);
    let {name,value,type}=e.target; 
    setFormData((a)=>{
      return{
        ...a,
        [name]:value,
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalShow(true)
    // setResult(user);
    // setUser("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          value={formData.user}
          onChange={handleInput}
          placeholder="Name"
        />
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleInput}
          placeholder="Mobile"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInput}
          placeholder="Email"
        />
        <input type="submit" />
      </form>
      <h1>{formData.user}</h1>
      <h1>{formData.mobile}</h1>
      <h1>{formData.email}</h1>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        user={formData.user}
        mobile={formData.mobile}
        email={formData.email}
      />

    </div>
  );
}

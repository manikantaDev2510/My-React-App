import React, { useContext } from "react";
import { userInfo } from "./Context Hook/parentComp";

export default function ChildComp(props) {
  const value=(useContext(userInfo))
  return (
    <div>
      <button onClick={props.onClick}>click me</button>
      <h1>{props.value}</h1>
    </div>
  );
}

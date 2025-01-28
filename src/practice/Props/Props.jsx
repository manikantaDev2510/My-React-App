import React from "react";
function Props(props){
    return(<>
    <h1>Hello {props.name} from {props.city}</h1>
    </>)
}
export default Props;
// like this we access props



// PROPS:
// in react, props stands for properties which are used to pass from one component (parent) to other component(child) for reusing the component.
// we can access props in two ways:
// 1. directly using props keyword as a nested elements b/w the open tagged
// 2. children props.  this can be used as a nested element b/w the open taged comp and closing tagged component.
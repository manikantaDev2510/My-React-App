// import React from "react";

// function Display(props){
//     console.log("display component is rendering")
//     return(
//         <div>
//             <h1>{props.value}</h1>
//         </div>
//     )
// }

// export default React.memo(Display);
// // In function component To import pure component we write this

// Pure component means it will avoids unnessary renderings. It should render whenever changes in props.

// In class component to import pure component we write like this
import React,{PureComponent} from "react";
export default class Display extends PureComponent{
    render(props){
        console.log("Display-rendering")
        return(
            <div>{this.props.value}</div>
        )
    }
}
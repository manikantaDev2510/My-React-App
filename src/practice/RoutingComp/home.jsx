// import React, { useEffect } from "react";

// export default function Home() {
//     useEffect(() => {
//         console.log("mouted");
//     });
//     useEffect(() => {
//         return () => {
//             console.log("unmouted");
//         };
//     });
//     return <div>Home</div>;
// }



import React, { Component } from "react";

class Home extends Component {
    componentDidMount() {
        console.log("mounted-home component");
    }
    componentWillUnmount(){
        console.log("unmounted-home component");
    }
    render(){
        return(<h1>home Component</h1>)
    }
}

export default Home;
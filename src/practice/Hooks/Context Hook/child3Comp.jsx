import React, { useContext } from 'react'
import { productInfo, userInfo } from './parentComp'

export default function Child3Comp() {
    const data=useContext(productInfo)
  return (
    <div>
        <h1>{data.p_name}</h1>
        <h1>{data.p_model}</h1>
        <h2>{data.p_price}</h2>
    </div>
  )
}

// import React, { useState } from "react";

// function App() {
//     const [circles, setCircles] = useState([]);
//     const [backgroundColor, setBackgroundColor] = useState("white");

//     // Function to generate a random radius between 20px and 200px
//     const getRandomRadius = () => Math.floor(Math.random() * (200 - 20 + 1)) + 20;

//     // Function to handle clicks on the viewport
//     const handleClick = (e) => {
//         const newCircle = {
//             x: e.clientX,
//             y: e.clientY,
//             radius: getRandomRadius(),
//         };

//         const updatedCircles = [...circles, newCircle];

//         if (updatedCircles.length > 2) {
//             setCircles([]);
//             setBackgroundColor("white"); // Reset background color
//         } else {
//             setCircles(updatedCircles);
//         }
//     };

//     return (
//         <div
//             style={{
//                 width: "100vw",
//                 height: "100vh",
//                 backgroundColor: backgroundColor,
//                 position: "relative",
//                 overflow: "hidden",
//             }}
//             onClick={handleClick}
//         >
//             {circles.map((circle, index) => (
//                 <div
//                     key={index}
//                     style={{
//                         position: "absolute",
//                         left: circle.x - circle.radius,
//                         top: circle.y - circle.radius,
//                         width: circle.radius * 2,
//                         height: circle.radius * 2,
//                         borderRadius: "50%",
//                         backgroundColor: "blue",
//                     }}
//                 ></div>
//             ))}
//         </div>
//     );
// }

// export default App;

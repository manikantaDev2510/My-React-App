// Condition Rendering

import React from "react";

function CondRend(props) {
// const login=false;
//     if (login) {
//         return (
//             <div>
//                 <h1>True Statement</h1>
//             </div>
//         );
//     } else {
//         return (
//             <div>
//                 <h1>False Statement</h1>
//             </div>
//         );
//     }

// // In react we wont ues this if-else Conditions as above we use terinory operator


// // This is normal way
// const login=false;
// return login?<h1>Login Successful</h1>:<h1>Login Unsuccessful</h1>


// This is using Props
return props.login?<h1>Login Successful</h1>:<h1>Login Unsuccessful</h1>


}

export default CondRend;
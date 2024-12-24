import React from "react";
import Child from "./Child";
// Here we importedthe component

function Parent(){
    return(
        <div>
            <h1>
                Parent
            </h1>
            <Child/>
        </div>
    )
}
export default Parent;
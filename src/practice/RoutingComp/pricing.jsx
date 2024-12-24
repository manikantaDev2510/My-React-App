import React, { useEffect } from "react";

export default function Pricing() {
    useEffect(() => {
        console.log("mounted-pricing component");
    })
    useEffect(() => {
        return () => {
            console.log("unmounted-pricing component");
        }
    })
    return (
        <div>
            Pricing
        </div>
    )
}
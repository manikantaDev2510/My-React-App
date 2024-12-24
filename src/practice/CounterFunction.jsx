import React from "react";
import { useState } from "react";
import ButtonComp from "./Buttoncomp";

export default function CountFc() {
    const [counter, setCounter] = useState(0);
    const counterHandler = (action) => {
        switch (action) {
            case "increment":
                setCounter(counter + 1);
                break;
            case "decrement":
                setCounter(counter - 1);
                break;
            case "reset":
                setCounter(counter);
                break;
            default:
                setCounter(0);
        }
    };
    return (
        <div>
            <h1>{counter}</h1>
            <ButtonComp
                onClick={() => {
                    counterHandler("increment");
                }}
            name="Increment"/>
            <ButtonComp
                onClick={() => {
                    counterHandler("decrement");
                }}
            name="Decrement"/>
            <ButtonComp
                onClick={() => {
                    counterHandler("reset");
                }}
            name="Reset"/>
        </div>
    );
}
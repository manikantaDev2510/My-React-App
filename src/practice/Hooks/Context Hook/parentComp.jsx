import React, { createContext, useState } from "react";
import Child1Comp from "./child1Comp";

export const userInfo = createContext();
export const productInfo = createContext();

export default function ParentComp() {
    const [user, setUser] = useState("Manikanta");
    const [products, setProducts] = useState({
        p_id: 1,
        p_name: "mobile",
        p_price: "25000",
        p_model: "2024",
    });
    return (
        <div>
            <productInfo.Provider value={products}>
                <userInfo.Provider value={user}>
                    <Child1Comp />
                </userInfo.Provider>
            </productInfo.Provider>
        </div>
    );
}

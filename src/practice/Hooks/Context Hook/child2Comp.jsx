import React, { useContext } from 'react'
import { productInfo, userInfo } from './parentComp';
import Child3Comp from './child3Comp';

export default function Child2Comp() {
    const value=(useContext(userInfo));
    const products=useContext(productInfo)
    console.log(products)
  return (
    <div>
        <Child3Comp/>
        <h1>hello</h1>
        <h1>{value}</h1>
    </div>
  )
}
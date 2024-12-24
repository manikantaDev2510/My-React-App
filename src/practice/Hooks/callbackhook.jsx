import React, { useCallback, useState } from 'react'
import ChildComp from './childComp'

export default function CallBackHook() {
    const [count, setCount] = useState(1);
    const [callbackCount, setCallbackCount] = useState(0);
    const handleClick = useCallback(() => {
        setCallbackCount(callbackCount + 1)
    },[count])
    const handleCount=()=>{
        setCount(count + 1)
    }
    return (
        <div>
            <ChildComp onClick={handleClick} value={count} />
            <p>callback created : {callbackCount}</p>
            <button onClick={handleCount}>UpdateCount</button>
        </div>
    )
}

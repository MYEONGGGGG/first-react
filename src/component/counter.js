import React from "react";
import { useState } from "react";

const Counter = () => {
    const [msg, setMsg] = useState(null);
    const [counter2, setCounter2] = useState(0);

    const increase = () => {
      setMsg(null);
      setCounter2(counter2 + 1);
    };

    const decrease = () => {
        if (counter2 === 0) { setMsg('더 이상 클릭할 수 없습니다! (최소값: 0)'); }
        else {
            setMsg(null);
            setCounter2(counter2 - 1);
        }
    };

    return (
        <div className="counter">
            <div>{counter2}</div>
            <div>
                <button onClick={increase}>click!</button>
                <button onClick={decrease}>click2!</button>
            </div>
            <div className="msg">{msg}</div>
        </div>
    );
};

export default Counter;
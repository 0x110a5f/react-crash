import { useState } from "react";

export default function UseStateSample() {
    const [count, setCount] = useState(0);

    /* Add 1 to `num` */
    function increment() {
        setCount(count + 1);
    }

    /* Subtract 1 to `num` */
    function decrement() {
        setCount(count - 1);
    }

    return (
        <>
            <h1>UseState</h1>
            <p>COUNT: { count }</p>

            <button type="button" onClick={increment}>Increment</button>
            <button type="button" onClick={decrement}>Decrement</button>
        </>
    );
}
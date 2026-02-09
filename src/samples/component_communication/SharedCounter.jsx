import { useState } from "react";


function SampleButton({ label, onTap }) {
    return (
        <>
            <button type="button" onClick={onTap}>{label}</button>
        </>
    );
}

function SharedCounter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>Current count: {count}</p>
            <SampleButton
                onTap={() => setCount(count + 1)}
                label={"Increment"}
            ></SampleButton>
            <SampleButton
                onTap={() => setCount(count - 1)}
                label={"Decrement"}
            ></SampleButton>
        </>
    );
}


export default SharedCounter;
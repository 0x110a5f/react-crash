import { useState } from "react";


function NameField({ setValue }) {
    return (
        <label >
            Enter your name:
            <input type="text" onChange={setValue}></input>
        </label>
    )
}


function ControlledForm() {
    const [name, setName] = useState("");

    function updateName(event) {
        setName(event.target.value)
    };

    return (
        <form>
            Name: {name} <br />
            <NameField setValue={updateName}></NameField>
        </form>
    );
}


export default ControlledForm;
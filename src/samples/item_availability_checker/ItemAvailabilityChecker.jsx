import { useState } from "react";
import { item_list } from "../../fixtures/item_list";


function ItemNameInput({ setValue }) {
    return (
        <label>Type item name: 
            <input type="text" onChange={setValue} />
        </label>
    );
}

function ItemAvailabilityChecker() {
    const [itemName, setItemName] = useState("");

    function handleItemNameChanges(event) {
        setItemName(event.target.value);
    }

    function getAvailabilityStatus() {
        if (itemName.length < 1) return '';
        return item_list.includes(itemName) ? 'Available' : 'Not available';
    }

    return (
        <>
            <section>
                <h1>Available items</h1>
                <ul>
                    {item_list.map(item => <li key={item}>{item}</li>)}
                </ul>
            </section>

            <br />
            <ItemNameInput setValue={handleItemNameChanges}></ItemNameInput>
            {getAvailabilityStatus()}
        </>
    );
}


export default ItemAvailabilityChecker;
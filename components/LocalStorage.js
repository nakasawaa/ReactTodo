import { useState } from "react";

export default function LocalStorage() {
    const ls = localStorage;
    const [number, setNumber] = useState(ls.getItem("number") === null ? "0" : ls.getItem("number"));

    ls.setItem("key1", "value1");
    ls.setItem("key2", "value2");
    ls.setItem("key3", "value3");
    ls.removeItem("key2")

const increment = () => {
    const incAsInt = parseInt(number) +1;
    setNumber(incAsInt.toString());
    ls.setItem("number", incAsInt.toString());
}

return(
<div>
    <h2>LocalStorage</h2>
    <ul>
        {Object.keys(ls).map((key) => (
            <li>
                {key}: {ls.getItem(key)}
            </li>
        
        
        ))}
    </ul>
    <p>valeur de key3: {ls.getItem("key3")}</p>
    <button onClick={increment}>increment</button>
    <p>valeur de number : {number}</p>
</div>

)


}
import {useState} from "react"

export default function Calculatrice() {
const [input1, setInput1] = useState(0);
const [input2, setInput2] = useState(0);

    const addi = () => (
        alert(parseInt(input1)+parseInt(input2))
    );

    const soust = () => (
        alert(parseInt(input1)-parseInt(input2))
    );

    const multi = () => (
        alert(parseInt(input1)*parseInt(input2))
    );

    const divi = () => (
        alert(parseInt(input1)/parseInt(input2))
    );


    return(
<div>
    <input type ="number" onChange={e => setInput1(e.target.value)}></input>
    <input type ="number" onChange={e => setInput2(e.target.value)}></input>
    <button onClick={addi}>+ </button>
    <button onClick={soust}>- </button>
    <button onClick={multi}> *</button>
    <button onClick={divi}>/ </button>
</div>
    );
}
import { useState } from "react";
import { connect } from "react-redux";
import { actionAddBoy } from "../Actions/namesActions";

function AddBoy({actionAddBoy}) {

    const [input, setInput] = useState('');

    const add = () => {
        actionAddBoy(input);
        setInput('');
    }

    return (
        <div className="input">
            <input value={input} onChange={e=>setInput(e.target.value)}></input>
            <button onClick={add}>Add Boy</button>
        </div>
    )
}
export default connect(
    null,
    {actionAddBoy}
)(AddBoy);
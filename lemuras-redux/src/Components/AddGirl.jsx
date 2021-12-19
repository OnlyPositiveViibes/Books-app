import { useState } from "react";
import { connect } from "react-redux";
import { actionAddGirl } from "../Actions/namesActions";

function AddGirl({actionAddGirl}) {

    const [input, setInput] = useState('');

    const add = () => {
        actionAddGirl(input);
        setInput('');
    }

    return (
        <div className="input">
            <input value={input} onChange={e=>setInput(e.target.value)}></input>
            <button onClick={add}>Add Girl</button>
        </div>
    )
}
export default connect(
    null,
    {actionAddGirl}
)(AddGirl);
import { useState } from "react"

function TextInput({whatText}) {

    const [text, setText] = useState('Labas');

    const changed = e => {
        console.log(e.target.value);
        setText(e.target.value);
    }

    return (
        <div className="m-3">
            <input type="text" onChange={changed} value={text}></input>
            <button className="button yellow" onClick={() => whatText(text)}>GO!</button>
        </div>
    )
}

export default TextInput
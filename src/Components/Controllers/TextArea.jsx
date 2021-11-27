import { useState } from "react";



function TextArea() {


    const [text, setText] = useState("Labas");

    const changed = e => {
        setText(e.target.value);

    }

    return (
        <div className="m-3">
            <textarea value={text} onChange={changed}></textarea>


        </div>
    )
}

export default TextArea;
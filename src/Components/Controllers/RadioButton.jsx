import { useState } from "react";


function RadioButton() {

    const defaultRadio = [false, false, false, false, false]


    const [radio, setRadio] = useState([
        false, false, true, false, false
    ])

    const control = e => {

        const radioCopy = [...defaultRadio];
        const i = parseInt(e.target.value);
        radioCopy[i] = true;
        setRadio(radioCopy)


    }

    return (
        <div className="m-3">
            <div className="nice-border">
                <input type="radio" name="Hello" onChange={control} value="0" checked={radio[0]} ></input>
                <input type="radio" name="Hello" onChange={control} value="1" checked={radio[1]} ></input>
                <input type="radio" name="Hello" onChange={control} value="2" checked={radio[2]} ></input>
                <input type="radio" name="Hello" onChange={control} value="3" checked={radio[3]} ></input>
                <input type="radio" name="Hello" onChange={control} value="4" checked={radio[4]} ></input>

            </div>
        </div>

    )
}

export default RadioButton;

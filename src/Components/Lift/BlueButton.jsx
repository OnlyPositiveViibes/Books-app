import { useState } from "react";

function BlueButton({buttonCount, plus}) {

   
    return (
        <button className="button" onClick={plus}>+{buttonCount}</button>
    )
}

export default BlueButton;
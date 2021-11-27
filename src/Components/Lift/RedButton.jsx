import { useState } from "react";

function RedButton({count, minus}) {

 

    return (

        <button className="button red" onClick={minus}>-{count}</button>
    )
}

export default RedButton;
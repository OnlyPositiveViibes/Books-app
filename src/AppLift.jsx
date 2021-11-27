import { useState } from "react";

import BlueButton from "./Components/Lift/BlueButton";
import RedButton from "./Components/Lift/RedButton";


function App() {

    const [buttonCount, setButtonCount] = useState(777);

    const plus = () => {
        setButtonCount(buttonCount + 1);
    }

    const [redButtonCount, setRedButton] = useState(47);

    const minus = () => {
        setRedButton(redButtonCount - 1);
    }



    return (


        <div className="App col">
            <div>Labas rytas</div>
            <BlueButton buttonCount={redButtonCount} plus={plus} />
            <RedButton count={buttonCount} minus={minus} />

        </div>
    )
}

export default App;
import { useState } from "react";
import TextInput from "./Components/Controllers/TextInput";
import Select from "./Components/Controllers/Select";
import TextArea from "./Components/Controllers/TextArea";
import CheckBox from "./Components/Controllers/CheckBox";
import RadioButton from "./Components/Controllers/RadioButton";
import ShowText from "./ShowText";

function App() {

   const [showText, setShowText] = useState('Nothing...');

    const whatText = (text) => {
        setShowText(text);
    }

    return (
        <div className="App col">

            <ShowText text={showText}/>

            <TextInput whatText={whatText} />

            <Select />

            <TextArea />

            <CheckBox />

            <RadioButton />

        </div>

    )
}

export default App;
import { useState } from "react";
import Checkbox from "./Components/Control/Checkbox";
import Radio from "./Components/Control/Radio";
import Select from "./Components/Control/Select";
import ShowText from "./Components/Control/ShowText";
import Textarea from "./Components/Control/Textarea";
import TextInput from "./Components/Control/TextInput";


function App() {

    const [showText, setShowText] = useState('nothing...');

    const whatText = (text) => {
        setShowText(text);
    }


    return (
        <div className="App col">

            <ShowText text={showText}></ShowText>

            <TextInput whatText={whatText}></TextInput>

            <Select></Select>

            <Textarea></Textarea>

            <Checkbox></Checkbox>

            <Radio></Radio>

        </div>
    )
}

export default App;
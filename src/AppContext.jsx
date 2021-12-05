import { Children, useState } from "react";
import Children1 from "./Components/Context/Children1";
import All from "./Components/Contexts/All";

function App() {

    const [input1, setInput] = useState('')
    const [input2, setInput2] = useState('')


    return(
        <All.Provider value={input2}>
        <div className="App col">
            <h1>My name is Jeff</h1>
        <input type="text" onChange={e => 
            setInput(e.target.value)} value={input1} />
             <input type="text" onChange={e => 
            setInput2(e.target.value)} value={input2} />
            <Children1 say={input1}></Children1>
        </div>
        </All.Provider>
    )
}

export default App;
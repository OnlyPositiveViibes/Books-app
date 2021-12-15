import { useReducer, useState } from "react";
import { actionAdd, actionDiff, actionDiv, actionMult } from "./Actions/calculator";
import calculatorReducer from "./Reducers/calculatorReducer";

function App() {

    // const [books, setBooks] = useState({ showBooks: [], masterBooks: [] })
    // const [books, dispatch] = useReducer(reducer, { showBooks: [], masterBooks: [] });

    // const [counter, counterDispatch] = useReducer(counterReducer, 0);

    const [calculator, calculatorDispach] = useReducer(calculatorReducer, 0);
    const [d1, setD1] = useState(0);
    const [d2, setD2] = useState(0);

    const sum = () => {
        calculatorDispach(
            actionAdd({d1:d1, d2:d2})
        )
    }

    const diff = () => {
        calculatorDispach(
            actionDiff({d1:d1, d2:d2})
        )
    }

    const mult = () => {
        calculatorDispach(
            actionMult({d1:d1, d2:d2})
        )
    }

    const div = () => {
        calculatorDispach(
            actionDiv({d1:d1, d2:d2})
        )
    }

    return (
        <div className="App col top">
            <div className="calc">
                <h1>Skaičiuotuvas</h1>
                <div className="calc__in">
                    <input type="text" value={d1} onChange={e => setD1(e.target.value)} />
                    <input type="text" value={d2} onChange={e => setD2(e.target.value)} />
                </div>
                <div className="calc__res">
                    {calculator}
                </div>
                <div className="calc__butt">
                    <button className="button" onClick={sum}>+</button>
                    <button className="button" onClick={diff}>-</button>
                    <button className="button" onClick={mult}>*</button>
                    <button className="button" onClick={div}>/</button>
                </div>
            </div>
        </div>
    )
}

export default App;
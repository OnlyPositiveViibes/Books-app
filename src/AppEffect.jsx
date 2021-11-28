import { useEffect, useRef, useState } from "react";

function App() {

    console.log('App TOP run');

    const [color, setColor] = useState('#777');
    const [size, setSize] = useState('20px');
    // const [first, setFirst] = useState(true);
    const first = useRef(true);


    useEffect(() => {
        if (!first.current) {
            console.log('App EFFECT COLOR run');
        }
        else {
            first.current = false;
        }
    }, [color]);

    useEffect(() => {
        // console.log('App EFFECT SIZE run');
        // randomSize();
    }, [size]);

    useEffect(() => {
        // console.log('App EFFECT BOTH run');
    }, [size, color]);


    useEffect(() => {
        // console.log('App EFFECT READY run');
    }, []);


    

    const randomColor = () => {
        setColor('#'+Math.floor(Math.random()*16777215).toString(16));
    }

    const randomSize = () => {
        const [maximum, minimum] = [50, 20];
        setSize(Math.floor((Math.random() * (maximum - minimum + 1)) + minimum) + 'px');
    }

    return (
        <div className="App col">
            <h1 style={{
                color: color,
                fontSize: size
            }}>Sekmadienis</h1>
            <button className="button pink" onClick={randomColor}>Random Color</button>
            <button className="button yellow" onClick={randomSize}>Random Size</button>
        </div>
    )

}

export default App;
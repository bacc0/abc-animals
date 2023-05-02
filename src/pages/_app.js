import React, { useState, useEffect, Fragment } from 'react'

import { colors } from '../data'
import '../styles/App.css'

import MainView from '../components/MainView'
import Sounds from '../components/Sounds'


function App() {


    const [count, setCount] = useState(0);
    const [countCoors, setCountColors] = useState(0);
    const [bgColor, setBgColor] = useState('#ccff90')
    const [visibleButtons, setVisibleButtons] = useState(true);
    const [visibleSounds, setVisibleSounds] = useState(true);

    useEffect(() => {
        setVisibleSounds(false)

        setTimeout(() => {
            setVisibleSounds(true)

        }, 100);
    }, [count]);

    useEffect(() => {
        setBgColor(colors[countCoors])

    }, [countCoors]);

    return (
        <div
            style={{
                backgroundColor: bgColor,
                transition: 'background-color 2s ease-out',
                '-webkit-transition': 'background-color 2s ease-out',
                ' -moz-transition': 'background-color 2s ease-out',

                backgroundImage: 'url("/bgTop.svg"), url("/bgBottom.svg")',
                backgroundRepeat: 'repeat-x, repeat-x',
                backgroundPosition: 'top, bottom'
            }}
        >
            <div className="App-header">
                <Fragment>
                    {
                        visibleSounds && (
                            <Sounds
                                count={count}
                                visibleButtons={visibleButtons}
                            />
                        )
                    }
                    <MainView
                        count={count}
                        bgColor={bgColor}
                        setCount={setCount}
                        setBgColor={setBgColor}
                        countCoors={countCoors}
                        setCountColors={setCountColors}
                        visibleButtons={visibleButtons}
                        setVisibleButtons={setVisibleButtons}
                    />
                </Fragment>
            </div>
        </div >
    );
}

export default App;

import React, { useState, useEffect } from 'react';

import '../styles/App.css';
import MainView from '../components/MainView'
import Sounds from '../components/Sounds'
import { useEventCallback } from '@material-ui/core';
import { animals, colors } from '../data'


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
        <div style={{
            backgroundColor: bgColor,
            transition: 'background-color 2s ease-out',
            '-webkit-transition': 'background-color 2s ease-out',
            ' -moz-transition': 'background-color 2s ease-out',
        }}
        >
            <header className="App-header">
                <>
                    {visibleSounds && (
                        <Sounds
                            count={count}
                            visibleButtons={visibleButtons}
                        />
                    )}
                    <MainView
                        count={count}
                        setCount={setCount}
                        setBgColor={setBgColor}
                        countCoors={countCoors}
                        setCountColors={setCountColors}
                        bgColor={bgColor}
                        visibleButtons={visibleButtons}
                        setVisibleButtons={setVisibleButtons}
                    />
                </>
            </header>

        </div>
    );
}

export default App;

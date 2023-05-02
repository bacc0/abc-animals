import React, { useState, useEffect, useRef } from 'react';

import '../styles/App.css';
import MainView from '../components/MainView'
import Sounds from '../components/Sounds'
// import { useEventCallback } from '@material-ui/core';
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



    // ------------------------- (swipe) left and right
    const touchSurfaceRef = useRef(null);

    function handleTouchStart(event) {
        const startX = event.touches[0].clientX;
        const startY = event.touches[0].clientY;
        touchSurfaceRef.current.startX = startX;
        touchSurfaceRef.current.startY = startY;
    }

    function handleTouchMove(event) {
        event.preventDefault();
    }

    function handleTouchEnd(event) {
        const deltaX = event.changedTouches[0].clientX - touchSurfaceRef.current.startX;
        const deltaY = event.changedTouches[0].clientY - touchSurfaceRef.current.startY;
        const swipeDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "horizontal" : "vertical";

        if (swipeDirection === "horizontal") {
            if (deltaX > 0) {
                // right swipe
                if (count > 0) {
                    setCount(count - 1)
                } else {
                    setCount(animals.length - 1)
                }

                touchSurfaceRef.current.style.backgroundColor = "blue";
            } else {
                // left swipe
                if (count !== animals.length - 1) {
                    setCount(count + 1)
                } else {
                    setCount(0)
                }
                touchSurfaceRef.current.style.backgroundColor = "green";
            }

            // ------------------------- background color handle  
            if (countCoors < colors.length - 1) {

                setCountColors(countCoors + 1)

            } else {
                setCountColors(0)
            }
            // ------------------------- background color handle 

        }
    }
    // ------------------------- swipe

    return (
        <div
            // ------------------------- swipe controls
            // className="touch-sensitive"
            // ref={touchSurfaceRef}
            // onTouchStart={handleTouchStart}
            // onTouchMove={handleTouchMove}
            // onTouchEnd={handleTouchEnd}
            // ------------------------- swipe controls


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

        </div >
    );
}

export default App;

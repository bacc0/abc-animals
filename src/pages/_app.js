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
        // setBgColor(`linear-gradient(${countCoors === 0
        //     ? 0
        //     : countCoors === 1
        //         ? 20
        //         : countCoors === 2
        //             ? 40
        //             : countCoors === 3
        //                 ? 60
        //                 : countCoors === 4
        //                     ? 40
        //                     : countCoors === 5
        //                         ? 20
        //                         : 0


        //     // countCoors === 0 ? 20 :
        //     // countCoors > 2 ? 40 :
        //     //     countCoors > 4 ? 60 : 40
        //     }deg, 
        //     ${colors[countCoors]
        //     } , ${countCoors === 0
        //         ? colors[5]
        //         : countCoors === 5
        //             ? colors[countCoors]
        //             : colors[countCoors - 1]
        //     }, ${countCoors === 0
        //         ? colors[5]
        //         : countCoors === 5
        //             ? colors[countCoors]
        //             : colors[countCoors - 1]
        //     })`)

    }, [countCoors]);

    return (
        <div
            style={{
                backgroundColor: bgColor,
                transition: 'background-color 2s ease-out',
                '-webkit-transition': 'background-color 2s ease-out',
                ' -moz-transition': 'background-color 2s ease-out',


                // background: bgColor,

                backgroundImage: 'url("/bgTop.svg"), url("/bgBottom.svg")',
                backgroundRepeat: 'repeat-x, repeat-x',
                backgroundPosition: 'top, bottom',


            }}
        >
            <div className="App-header">
                <Fragment>

                    <Sounds
                        count={count}
                        visibleButtons={visibleButtons}
                    />

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

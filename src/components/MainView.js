import React, { useState, useEffect, useRef } from 'react';
// import './sprite_60fps.css'

import { animals, colors } from '../data'

import { motion } from 'framer-motion'



const MainView = ({
    count, setCount, countCoors,
    setCountColors, visibleButtons, setVisibleButtons }) => {

    const [array, setArray] = useState(0);//15
    // const [count, setCount] = useState(0);
    // const [countCoors, setCountColors] = useState(0);
    const [visible, setVisible] = useState(true);
    // const [visibleButtons, setVisibleButtons] = useState(true);

    const viewChanger = () => {
        setVisible(true)
        setTimeout(() => {
            // console.log('eeee')
            setVisible(false)

        }, 1500);
    }

    useEffect(() => {
        viewChanger()
    }, [count]);




    const countHandleClick = () => {

        if (countCoors < colors.length - 1) {

            setCountColors(countCoors + 1)

        } else {
            setCountColors(0)
        }

        viewChanger()

        setVisibleButtons(false)
        setInterval(() => {
            setVisibleButtons(true)
        }, 3000);

        if (count !== animals.length - 1) {
            setCount(count + 1)
        } else {
            setCount(0)
        }

    }

    const countHandleClickPrev = () => {

        setVisibleButtons(false)
        setInterval(() => {
            setVisibleButtons(true)
        }, 3000);

        if (countCoors < colors.length - 1) {

            setCountColors(countCoors + 1)


        } else {
            setCountColors(0)
        }

        viewChanger()

        if (count > 0) {
            setCount(count - 1)
        } else {
            setCount(animals.length - 1)
        }
    }
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

            // ------------------------- set visibility if buttons 
            setVisibleButtons(false)
            setInterval(() => {
                setVisibleButtons(true)
            }, 50);
            // ------------------------- set visibility if buttons 


        }
    }
    // ------------------------- swipe



    return (
        <>
            <div
                // ------------------------- swipe controls
                className="touch-sensitive"

                ref={touchSurfaceRef}

                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                // ------------------------- swipe controls
                style={{
                    position: 'relative',
                    left: 10,
                    background: countCoors,

                    delay: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'

                }}
            >
                {visible && (
                    <motion.h1
                        // onClick={countHandleClick}
                        // onTouchStart={countHandleClick}

                        initial={{
                            y: 0, x: -5, scale: 0.8, opacity: 0
                        }}
                        animate={{ y: 0, x: -5, scale: 1, opacity: 1 }}
                        transition={{
                            delay: .2, duration: 1.02, type: 'spring', stiffness: 220
                        }}

                        style={{
                            fontSize: 350,
                            margin: 0,
                            color: '#000000',
                        }}

                    >
                        {animals[count].letter}
                    </motion.h1>
                )}
                {!visible && (
                    <motion.div
                        // onClick={countHandleClick}
                        // onTouchStart={countHandleClick}
                        initial={{
                            y: 0, x: -10, scale: 0.8, opacity: 0
                        }}

                        animate={{ y: 0, x: -10, scale: 1, opacity: 1 }}
                        transition={{
                            delay: .3, duration: 1.02, type: 'spring', stiffness: 220
                        }}
                        style={{
                            backgroundImage: `url('/images/${animals[count].type}.svg')`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: `-${0}px 0px`,

                            display: 'block',
                            minHeight: 300,
                            minWidth: 300,
                            // backgroundColor: '#99999933'
                        }}
                    />

                )}

                <div
                    style={{
                        display: 'block',
                        minHeight: 70,
                        marginTop: 20,
                    }}
                >
                    {visibleButtons && (
                        <motion.h1

                            style={{
                                margin: 0,
                                color: '#000000',

                                fontSize: 50,
                                textAlign: 'center'
                            }}
                            initial={{
                                y: 30,
                                x: -10,
                                scale: 0.8,
                                opacity: 0
                            }}
                            animate={{ y: 0, x: -10, scale: 1, opacity: 1 }}
                            transition={{
                                delay: 2,
                                duration: 1.02,
                                type: 'spring', stiffness: 320
                            }}

                        >
                            {animals[count].name}
                        </motion.h1>
                    )}
                </div>
            </div>
            {visibleButtons && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 1,
                        duration: 2,
                    }}

                >

                    <button

                        style={{
                            position: 'absolute',
                            top: visibleButtons ? '72vh' : 0,
                            left: 8,

                            width: 90,
                            height: 90,

                            border: '1.5px solid #777777',
                            background: '#FFFFFFaa',
                            borderRadius: 100,

                            fontSize: 30,
                            fontWeight: 700,
                            color: '#777777',
                            backdropFilter: 'blur(2px)',
                            '-webkit-backdrop-filter': 'blur(2px)',

                        }}
                        onClick={countHandleClickPrev}
                    >
                        {'<'}
                    </button>

                    <button
                        disabled={!visibleButtons}
                        style={{
                            position: 'absolute',
                            top: visibleButtons ? '72vh' : 0,
                            right: 8,
                            width: 90,
                            height: 90,

                            border: '1.5px solid #777777',
                            background: '#FFFFFFaa',
                            borderRadius: 100,

                            fontSize: 30,
                            fontWeight: 700,
                            color: '#777777',
                            backdropFilter: 'blur(2px)',
                            '-webkit-backdrop-filter': 'blur(2px)',

                        }}
                        onClick={countHandleClick}
                    >
                        {'>'}
                    </button>
                </motion.div>
            )}
        </>
    );
};

export default MainView;


// const MyComponent = () => {

//     const [array, setArray] = useState(15);
//     const [count, setCount] = useState(0);
//     const [markerView, setMarkerView] = useState(false);

//     useEffect(() => {
//         setTimeout(() => {
//             setMarkerView(true)
//             setArray(15)
//         }, 1200);
//     }, []);

//     const onChange = () => {
//         setTimeout(() => {
//             setMarkerView(true)
//             setArray(15)
//         }, 1200);
//     }



//     const handleClick = () => {
//         setMarkerView(true)
//         setArray(15)
//     }
//     const countHandleClick = () => {

//         if (count !== animals.length - 1) {
//             setCount(count + 1)
//             setMarkerView(false)
//             onChange()

//         } else {
//             setCount(0)
//             setMarkerView(false)
//             onChange()
//         }
//     }

//     useEffect(() => {
//         // console.log(array)

//         setTimeout(() => {


//             if (array < 35040) {
//                 setArray(array + 292)
//             }
//         }, 5);

//     }, [array, markerView]);



//     return (
//         <div style={{ position: 'relative', left: 10 }}>
//             {!markerView && (
//                 <motion.div
//                     initial={{
//                         y: -430,
//                         scale: 0.9,
//                         opacity: 0
//                     }}
//                     animate={{ y: 0, scale: 0.9, opacity: 1 }}
//                     transition={{
//                         delay: .2,
//                         duration: 1.02,
//                         type: 'spring', stiffness: 220
//                     }}
//                     style={{
//                         // backgroundColor: '#33333333',
//                         backgroundImage: `url('/images/${animals[count].type}.svg')`,
//                         backgroundSize: 'cover',
//                         backgroundRepeat: 'no-repeat',
//                         backgroundPosition: `0px 0px`,
//                         // backgroundPosition: `-${292}px 0px`,
//                         display: 'block',
//                         minHeight: 200,
//                         minWidth: 300,
//                     }}
//                 />
//             )}
//             {markerView && (
//                 <motion.div

//                     initial={{
//                         y: -10,
//                         scale: 1,
//                         opacity: 1
//                     }}
//                     animate={{ y: 0, scale: 1, opacity: 1 }}
//                     transition={{
//                         delay: .0,
//                         duration: 0.02,
//                         type: 'spring', stiffness: 220
//                     }}

//                     style={{ position: 'relative', left: 14 }}
//                 >
//                     <motion.div
//                         initial={{
//                             scale: 0.9,
//                         }}
//                         animate={{ scale: 1.05 }}
//                         transition={{
//                             delay: 1.3,
//                             duration: 0.02,
//                             type: 'spring', stiffness: 500
//                         }}
//                         style={{
//                             backgroundImage: `url('/images/${animals[count].type}.svg')`,
//                             backgroundSize: 'cover',
//                             backgroundRepeat: 'no-repeat',
//                             backgroundPosition: `-${array}px 0px`,
//                             // backgroundPosition: `-${292}px 0px`,
//                             display: 'block',
//                             minHeight: 200,
//                             minWidth: 300,
//                         }}
//                     />
//                 </motion.div>

//             )}
//             <button onClick={handleClick}>click</button>
//             <button onClick={countHandleClick}>next</button>
//         </div>
//     );
// };

// export default MyComponent;

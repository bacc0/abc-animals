import React, { useState, useEffect, useRef, Fragment } from 'react'
import { animals, colors } from '../data'
import { motion } from 'framer-motion'


const MainView = ({
    count, setCount, countCoors, bgColor, setCountColors,
    visibleButtons, setVisibleButtons }) => {


    const [visible, setVisible] = useState(true);
    const [opacityElement, setOpacityElement] = useState(1);

    const viewChanger = () => {

        setVisible(true)
        setTimeout(() => {

            setVisible(false)
        }, 1500);
    }

    useEffect(() => {

        viewChanger()
    }, [count]);

    const opacityChanger = () => {

        setOpacityElement(0.05)

        setTimeout(() => {
            setOpacityElement(1)
        }, 400);
    }

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

    //------------------------------------  (swipe) left and right
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
                //------------------------------------ right swipe
                if (count > 0) {
                    setCount(count - 1)
                } else {
                    setCount(animals.length - 1)
                }
                opacityChanger()
            } else {
                //------------------------------------ left swipe
                if (count !== animals.length - 1) {
                    setCount(count + 1)
                } else {
                    setCount(0)
                }
                opacityChanger()
            }

            //------------------------------------ background color handle  
            if (countCoors < colors.length - 1) {

                setCountColors(countCoors + 1)

            } else {
                setCountColors(0)
            }
            //------------------------------------ background color handle

            //------------------------------------ set visibility if buttons 
            setVisibleButtons(false)
            setInterval(() => {
                setVisibleButtons(true)
            }, 50);
            //------------------------------------ set visibility if buttons 
        }
    }
    //------------------------------------ swipe


    return (
        <Fragment>
            <div
                //------------------------------------ swipe controls
                className="touch-sensitive"

                ref={touchSurfaceRef}

                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                //------------------------------------ swipe controls
                style={{
                    position: 'relative',
                    left: 10,
                    background: countCoors,

                    delay: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',

                    opacity: opacityElement,
                    transition: 'opacity 0.3s ease-out',
                    '-webkit-transition': 'opacity 0.3s ease-out',
                    ' -moz-transition': 'opacity 0.3s ease-out',
                }}
            >
                {
                    visible && (
                        <motion.h1
                            initial={{ y: 0, x: -5, scale: 0.8, opacity: 0 }}
                            animate={{ y: 0, x: -5, scale: 1, opacity: 1 }}
                            transition={{
                                delay: .2, duration: 1.02, type: 'spring', stiffness: 220
                            }}

                            style={{
                                fontSize: 350,
                                margin: 0,
                                color: '#000000',
                                textAlign: 'center',
                            }}
                        >
                            {animals[count].letter}
                        </motion.h1>
                    )
                }
                {
                    !visible && (
                        <motion.div
                            initial={{ y: 0, x: -10, scale: 0.8, opacity: 0 }}
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
                                fontSize: 60,
                                fontWeight: 600,
                                color: bgColor,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            {animals[count].letter}
                        </motion.div>
                    )
                }

                <div
                    style={{
                        display: 'block',
                        minHeight: 70,
                        marginTop: 20,
                    }}
                >
                    {
                        visibleButtons && (
                            <motion.h1
                                style={{
                                    margin: 0,
                                    color: '#000000',
                                    fontSize: 50,
                                    textAlign: 'center'
                                }}
                                initial={{ y: 30, x: -10, scale: 0.8, opacity: 0 }}
                                animate={{ y: 0, x: -10, scale: 1, opacity: 1 }}
                                transition={{ delay: 2, duration: 1.02, type: 'spring', stiffness: 320 }}
                            >
                                {animals[count].name}
                            </motion.h1>
                        )
                    }
                </div>
            </div>
            {
                visibleButtons && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 2 }}
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
                )
            }
        </Fragment>
    )
}

export default MainView
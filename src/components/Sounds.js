import React, { useState, useEffect } from 'react'
import { animals, colors } from '../data'
import ReactAudioPlayer from 'react-audio-player';
import { motion } from 'framer-motion'


const Sounds = ({ count, visibleButtons }) => {

     const [switchVisible, setSwitchVisible] = useState(false);
     const [autoplay, setAutoplay] = useState(true);

     const [autoplayType, setAutoplayType] = useState(true);

     const [textButton, setTextButton] = useState('MUTE');

     useEffect(() => {
          setTimeout(() => {
               setSwitchVisible(true)
          }, 3400);
     }, []);

     useEffect(() => {
          setAutoplayType(false)
          setTimeout(() => {
               setAutoplayType(true)

          }, 100);

     }, [count]);

     useEffect(() => {
          setSwitchVisible(false)
          setTimeout(() => {
               setSwitchVisible(true)
          }, 3400);

     }, [count]);

     const handleClick = () => {
          setAutoplay(!autoplay)
          setTextButton(textButton === 'PLAY' ? 'MUTE' : 'PLAY')
     }

     return (
          <div
               style={{
                    color: 'darkblue'
               }}
          >
               {visibleButtons && (
                    <motion.button

                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{
                              delay: 0.2,
                              duration: 1,
                         }}
                         style={{
                              width: 70,
                              height: 70,

                              borderRadius: 100,
                              border: `1.5px solid ${textButton === 'PLAY'
                                   ? '#154B19'
                                   : '#C60001'
                                   }`,
                              fontSize: 18,
                              fontWeight: 600,
                              color: '#FFFFFF',
                              backgroundColor: `${textButton === 'PLAY'
                                   ? '#2e7d32'
                                   : '#ff1744'
                                   }`,
                              position: 'absolute',
                              top: 12,
                              left: 0,
                              right: 0,
                              marginLeft: 'auto',
                              marginRight: 'auto',



                         }}
                         onClick={handleClick}
                    >
                         {textButton}
                    </motion.button>
               )}

               {
                    !switchVisible && (
                         <>
                              {/* <p>name</p> */}
                              <ReactAudioPlayer
                                   src={`/soundsType/${animals[count].type}.mp3`}
                                   volume={autoplayType ? 1 : 0}
                                   autoPlay={true}
                                   audioprocess={false}
                              // playsInline // Add this attribute to enable autoplay on iOS
                              />
                         </>

                    )
               }
               {
                    switchVisible && (

                         <ReactAudioPlayer
                              src={`/sounds/${animals[count].type}.mp3`}
                              volume={autoplay ? 0.3 : 0}
                              autoPlay={true}
                              audioprocess={false}
                         // playsInline // Add this attribute to enable autoplay on iOS
                         />

                    )
               }

               {/* <div>Sounds {animals[count].type}</div> */}

          </div >
     )
}

export default Sounds
import React, { useState, useEffect, Fragment } from 'react'
import { animals } from '../data'
import ReactAudioPlayer from 'react-audio-player'
import { motion } from 'framer-motion'


const Sounds = ({ count, visibleButtons }) => {

     const [autoplay, setAutoplay] = useState(true);

     const [autoplayType, setAutoplayType] = useState(true);

     const [textButton, setTextButton] = useState('MUTE');

     const [secondPlayer, setSecondPlayer] = useState(false);

     useEffect(() => {

          setTimeout(() => {
               setSecondPlayer(true)
          }, 550);

     }, []);

     useEffect(() => {
          setAutoplayType(false)
          setTimeout(() => {
               setAutoplayType(true)

          }, 100);

     }, [count]);

     const handleClick = () => {

          setAutoplay(!autoplay)
          setTextButton(textButton === 'PLAY' ? 'MUTE' : 'PLAY')
     }


     return (
          <Fragment>
               {

                    <motion.div
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{
                              delay: 1,
                              duration: 2,
                         }}
                         style={{
                              width: 110,
                              height: 62,


                              fontSize: 18,
                              fontWeight: 600,
                              color: '#FFFFFF00',

                              position: 'absolute',
                              top: 3,
                              left: 0,
                              right: 0,
                              marginLeft: 'auto',
                              marginRight: 'auto',
                              // backdropFilter: 'blur(2px)',
                              // '-webkit-backdrop-filter': 'blur(2px)',

                              backgroundImage: `url('/images/${textButton === 'PLAY' ? 'playON' : 'playOFF'}.svg')`,
                              backgroundSize: 'cover',
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: `-${0}px 0px`,
                         }}
                         onClick={handleClick}
                    >
                         {/* {textButton} */}
                    </motion.div>

               }

               <Fragment>
                    <ReactAudioPlayer
                         src={`/soundsType/${animals[count].type}.mp3`}
                         volume={autoplayType ? 1 : 0}
                         autoPlay={true}
                         audioprocess={false}
                    // playsInline // Add this attribute to enable autoplay on iOS
                    />

                    {
                         secondPlayer && (
                              <ReactAudioPlayer
                                   src={`/sounds/${animals[count].type}.mp3`}
                                   volume={autoplay ? 0.25 : 0}
                                   autoPlay={true}
                                   audioprocess={false}
                              />
                         )
                    }
               </Fragment>
          </Fragment>
     )
}

export default Sounds
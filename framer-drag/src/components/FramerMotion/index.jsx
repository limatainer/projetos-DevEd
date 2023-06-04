import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import React from 'react'

import imagens from './imagens'

import './styles.css'

export default function FramerMotion() {
  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <>
      <motion.h1 animate={{ x: 250 }}>Sliding with Motion</motion.h1>
      <br />
      <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
          {imagens.map((image) => {
            return (
              <motion.div className='item' key={image}>
                <img src={image} alt="praia-foto" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  )
}

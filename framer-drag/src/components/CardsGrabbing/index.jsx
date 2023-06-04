import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import imagens from './imagens'
export default function CardsGrabbing() {
  const [selectedId, setSelectedId] = useState(null)
  return (
    <div className="container">
      {
        imagens.map(item => (
          <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))
      }

      < AnimatePresence >
        {selectedId && (
          <motion.div layoutId={selectedId}>
            {/* <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2> */}
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </ AnimatePresence>

    </div>
  )
}

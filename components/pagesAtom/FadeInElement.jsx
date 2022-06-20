import React, { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import {useInView} from 'react-hook-inview'

const FadeinParagraph = ({ children }) => {

  const divVariants = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 },
  }
  
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={divVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

export default FadeinParagraph
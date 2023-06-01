import './CloudComponent.css';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const CloudComponent = () => {
  const constraintsRef = useRef(null);

  return (
    <div className='cloud-container'>
      <motion.div animate={{x: ["-40vw", "3vw"]}} transition={{duration: 10, ease:"easeInOut"}} className='cloud-group' ref={constraintsRef}>
        <motion.div animate={{y: ["-.2rem", ".3rem", ".1rem", "-.2rem"]}} transition={{duration: 3, ease:"linear", repeat: Infinity}}>
          <motion.div whileHover={{scale: 1.1}} className='cloudA'>
          </motion.div>
        </motion.div>
        <motion.div animate={{y: [".2rem", "-.3rem", "-.1rem", ".2rem"]}} transition={{duration: 4, ease:"linear", repeat: Infinity}}>
          <motion.div whileHover={{scale: 1.1}} className='cloudB'>
          </motion.div>
        </motion.div>
        <motion.div animate={{y: [".1rem", "-.2rem", ".3rem", ".1rem"]}} transition={{duration: 6, ease:"linear", repeat: Infinity}}>
          <motion.div whileHover={{scale: 1.1, color: 'black'}} className='cloudC'>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default CloudComponent;
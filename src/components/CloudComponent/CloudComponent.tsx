import './CloudComponent.css';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const CloudComponent = () => {
  const constraintsRef = useRef(null);

  return (
    <div className='cloud-container'>
      <motion.div animate={{x: ["-40vw", "55vw"]}} transition={{duration: 10, ease:"easeInOut"}} className='cloud-group' ref={constraintsRef}>
        <motion.div animate={{y: ["-.2rem", ".3rem", ".1rem", "-.2rem"]}} transition={{duration: 3, ease:"linear", repeat: Infinity}}>
          <motion.div whileHover={{scale: 1.1}} drag className='cloudA'>
            {/* <h1>Hosted on AWS S3 and distributed by CloudFront</h1> */}
          </motion.div>
        </motion.div>
        <motion.div animate={{y: [".2rem", "-.3rem", "-.1rem", ".2rem"]}} transition={{duration: 4, ease:"linear", repeat: Infinity}}>
          <motion.div whileHover={{scale: 1.1}} drag className='cloudB'>
            {/* <h1>Designed, Developed and Deployed by Wilson Mak</h1> */}
          </motion.div>
        </motion.div>
        <motion.div animate={{y: [".1rem", "-.2rem", ".3rem", ".1rem"]}} transition={{duration: 6, ease:"linear", repeat: Infinity}}>
          <motion.div whileHover={{scale: 1.1, color: 'black'}} drag className='cloudC'>
            {/* <motion.p style={{color: '#00000000'}}>Built using React and Framer Motion</motion.p> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default CloudComponent;
import Navbar from 'react-bootstrap/Navbar';
import { motion } from "framer-motion";
import WilsonNavIcon from '../NavIconComponent/WilsonNavIconComponent';
import './WilsonNavBar.css';


const WilsonNavBar = () => {
  
  return (
    <Navbar bg="white" expand="lg" className="nav-bar-container">
      <span style={{width: "100vw", display: "flex", justifyContent: "space-between"}}>
        <motion.nav whileHover={{scale: 1.05}}>
          <Navbar.Brand href="#home">wilson-mak</Navbar.Brand>
        </motion.nav>
        
        <div>
          <WilsonNavIcon linkAddr='https://www.linkedin.com/in/wilson-mak-2887b5171/' iconName='linkedin.png' iconAlt="LinkedIn Link"></WilsonNavIcon>
          <WilsonNavIcon linkAddr='https://github.com/wilson-makDev/' iconName='github.png' iconAlt="Github Link"></WilsonNavIcon>
          <WilsonNavIcon linkAddr='mailto:dev@wilson-mak.com' iconName='email.png' iconAlt="Github Link"></WilsonNavIcon>
          <WilsonNavIcon linkAddr='https://linktr.ee/wilsondev/' iconName='linktr.png' iconAlt="Linktr Link"></WilsonNavIcon>
          <WilsonNavIcon linkAddr='%PUBLIC_URL%/Resume.pdf' iconName='resume.png' iconAlt="Resume Link"></WilsonNavIcon>
        </div>
      </span>
    </Navbar>
  )
}



export default WilsonNavBar;
import { Navbar } from "react-bootstrap";
import { motion } from "framer-motion";
import './WilsonNavIconComponent.scss';

interface WilsonNavIconProps {
  linkAddr: string;
  iconName: string;
  iconAlt: string;
}

const WilsonNavIcon = ({linkAddr, iconName, iconAlt}: WilsonNavIconProps) => {
  const imgAddrFull = '/icons/' + iconName;

  return (
    <Navbar.Brand href={linkAddr} target="_blank" rel="noreferrer">
      <motion.img
          src={imgAddrFull}
          className="d-inline-block align-top icon-img"
          alt={iconAlt}
          whileHover={{scale: 1.2}}
        >
      </motion.img>
    </Navbar.Brand>
  )
}

export default WilsonNavIcon;
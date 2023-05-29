import { Navbar } from "react-bootstrap";
import { motion } from "framer-motion";
import "./WilsonNavIconComponent.css";

interface WilsonNavIconProps {
  linkAddr: string;
  iconName: string;
  iconAlt: string;
}

const WilsonNavIcon = ({linkAddr, iconName, iconAlt}: WilsonNavIconProps) => {
  const imgAddrFull = '/icons/' + iconName;

  return (
    <Navbar.Brand href={linkAddr}>
      <motion.img
          src={imgAddrFull}
          width="25rem"
          height="25rem"
          className="d-inline-block align-top"
          alt={iconAlt}
          whileHover={{scale: 1.2}}
        >
      </motion.img>
    </Navbar.Brand>
  )
}

export default WilsonNavIcon;
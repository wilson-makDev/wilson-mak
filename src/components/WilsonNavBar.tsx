import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


interface WilsonNavIconProps {
  linkAddr: string;
  iconName: string;
  iconAlt: string;
}

const WilsonNavIcon = ({linkAddr, iconName, iconAlt}: WilsonNavIconProps) => {
  const imgAddrFull = '/icons/' + iconName;

  return (
    <Navbar.Brand href={linkAddr}>
      <img
        src={imgAddrFull}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt={iconAlt}
      />
    </Navbar.Brand>
  )
}

const WilsonNavBar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Wilson-Mak</Navbar.Brand>
        <Container className='d-flex justify-content-end'>
          <WilsonNavIcon linkAddr='https://www.linkedin.com/in/wilson-mak-2887b5171/' iconName='linkedin.png' iconAlt="LinkedIn Link"></WilsonNavIcon>
          <WilsonNavIcon linkAddr='https://github.com/wilson-makDev/' iconName='github.png' iconAlt="Github Link"></WilsonNavIcon>
          <WilsonNavIcon linkAddr='mailto:dev@wilson-mak.com' iconName='email.png' iconAlt="Github Link"></WilsonNavIcon>
        </Container>
      </Container>
    </Navbar>
  )
}

//<a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by NajmunNahar - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Laisa Islam Ani - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Freepik - Flaticon</a>

export default WilsonNavBar;
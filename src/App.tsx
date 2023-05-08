import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuStack from './components/MenuStackComponent/MenuStack';
import WilsonNavBar from './components/WilsonNavBar/WilsonNavBar';
import { Row, Col } from 'react-bootstrap';
import WilsonContent from './components/WilsonContentComponent/WilsonContent';

function App() {
  return (
    <div style={{padding: "5vh 10vw"}}>
      <WilsonNavBar></WilsonNavBar>
      <Row style={{height: '100%', zIndex: 1}} >
        <Col>
          <WilsonContent></WilsonContent>
        </Col>
        <Col style={{maxWidth: 130}}>
          <div style={{position: 'fixed', top: "35vh", right: "2vw"}}>
            <MenuStack></MenuStack>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;

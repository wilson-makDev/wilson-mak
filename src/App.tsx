import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WilsonNavBar from './components/WilsonNavBar/WilsonNavBar';
import WilsonHeaderComponent from './components/WilsonHeaderComponent/WilsonHeaderComponent';
import WilsonCareerComponent from './components/WilsonCareerComponent/WilsonCareerComponent';
import WilsonProjectsComponent from './components/WilsonProjectsComponent/WilsonProjectsComponent';
import CloudComponent from './components/CloudComponent/CloudComponent';
import MenuStack from './components/MenuStackComponent/MenuStack';

function App() {
  return (
    <div className="app-container">
      <div className="Side-Bar">
        <MenuStack></MenuStack>
      </div>
      <div className="Nav-Bar">
        <WilsonNavBar></WilsonNavBar>
      </div>
      <div className="Header">
        <CloudComponent></CloudComponent>
        <WilsonHeaderComponent></WilsonHeaderComponent>
      </div>
      <div className="Career">
        <WilsonCareerComponent></WilsonCareerComponent>
      </div>
      <div className="Projects">
        <WilsonProjectsComponent></WilsonProjectsComponent>
      </div>
      {/* <div className="Education">
        <WilsonSchoolComponent></WilsonSchoolComponent>
      </div> */}
    </div>
  );
}

export default App;

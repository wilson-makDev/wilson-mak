import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WilsonNavBar from './components/WilsonNavBar/WilsonNavBar';
import WilsonHeaderComponent from './components/WilsonHeaderComponent/WilsonHeaderComponent';
import WilsonAboutComponent from './components/WilsonAboutComponent/WilsonAboutComponent';
import WilsonCareerComponent from './components/WilsonCareerComponent/WilsonCareerComponent';
import WilsonProjectsComponent from './components/WilsonProjectsComponent/WilsonProjectsComponent';
import WilsonSchoolComponent from './components/WilsonSchoolComponent/WilsonSchoolComponent';
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
        <WilsonHeaderComponent></WilsonHeaderComponent>
      </div>
      <div className="About">
        <WilsonAboutComponent></WilsonAboutComponent>
      </div>
      <div className="Career">
        <WilsonCareerComponent></WilsonCareerComponent>
      </div>
      <div className="Projects">
        <WilsonProjectsComponent></WilsonProjectsComponent>
      </div>
      <div className="Education">
        <WilsonSchoolComponent></WilsonSchoolComponent>
      </div>
      <div className="Playground">

      </div>
    </div>
  );
}

export default App;

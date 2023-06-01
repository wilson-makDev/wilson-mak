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
    <div>
      <div id='home' className="app-container">
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
        <div id='career' className="Career">
          <WilsonCareerComponent></WilsonCareerComponent>
        </div>
        <div id='projects' className="Projects">
          <WilsonProjectsComponent></WilsonProjectsComponent>
        </div>
      </div>
      <div className='Footer-area'>
          Website designed and developed by Wilson Mak
          <a className="Footer-link" href='/Credits.html' target="_blank" rel="noreferrer">Icon Credits</a>
        </div>
    </div>

  );
}

export default App;

import WilsonSkillsLayoutComponent from '../WilsonSkillsLayoutComponent/WilsonSkillsLayoutComponent';
import './WilsonAboutComponent.scss';


const WilsonAboutComponent = () => {

  return (
    <div>
        <div className='about-me-container'>
          Welcome to my portfolio!

          <br></br>
          <br></br>

          I am a recent graduate from the <b>University of Toronto</b> where I obtained a honours bachelor of science in <b>Computer Science</b> and leveled up all my developer skills from projects and co-op work. 
          My main focus is a mix of <b>front-end</b>, <b>back-end</b> and <b>mobile</b> development.

          <br></br>
          <br></br>

          Currently, I am job-seeking for in-person positions in the <b>Greater Toronto Area</b> area as well as remote work. Hope you enjoy my portfolio and feel free to reach out! Always looking for opportunities to learn and grow.
        </div>

        <WilsonSkillsLayoutComponent></WilsonSkillsLayoutComponent>
    </div>
  )
}

export default WilsonAboutComponent;
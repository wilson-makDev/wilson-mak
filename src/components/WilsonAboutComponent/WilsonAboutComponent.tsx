import WilsonSkillsLayoutComponent from '../WilsonSkillsLayoutComponent/WilsonSkillsLayoutComponent';
import './WilsonAboutComponent.css';


const WilsonAboutComponent = () => {

  return (
    <div>
        <div className='about-me-container'>
          Hi! My Name is <b>Wilson</b> and I am a <b>Software Developer</b> in Toronto, Canada.

          <br></br>
          <br></br>

          I am a recent graduate from the <b>University of Toronto</b> where I obtained a honours bachelor of science in <b>Computer Science</b> and leveled up all my developer skills from projects and co-op work. 
          My main focus is a mix of <b>front-end, back-end and mobile</b> development.
        </div>

        <WilsonSkillsLayoutComponent></WilsonSkillsLayoutComponent>
    </div>
  )
}

export default WilsonAboutComponent;
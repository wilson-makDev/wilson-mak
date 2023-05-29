import WilsonSkillsLayoutComponent from '../WilsonSkillsLayoutComponent/WilsonSkillsLayoutComponent';
import './WilsonAboutComponent.css';


const WilsonAboutComponent = () => {

  return (
    <div>
        <h1>About Me</h1>
        <div>
          Hi! My Name is <b>Wilson</b> and I am a <b>Software Developer</b> in Toronto, Canada.
          My journey in software development started back in the small city of North Bay - shout out to North Bay - where I started learning how to code over many highschool summers starting in 2015.
          Over those summers I realized the unlimited potential to help that came from building digital solutions to real world problems, and so I was fixed on the path to be a software developer 🤩

          <br></br>
          <br></br>

          Now, I have completed my degree at the <b>University of Toronto</b> in <b>Computer Science</b> and leveled up all my developer skills from projects and co-op work. 
          My main focus is creating awesome web applications from <b>front-end to back-end</b> and everything in between. 
          To be able to have control of all aspects of a tech-stack to fine-tune any layer to optimize for the solution I am striving for is what I love about <b>full-stack software development</b>.
        </div>
        
        <WilsonSkillsLayoutComponent></WilsonSkillsLayoutComponent>
    </div>
  )
}

export default WilsonAboutComponent;
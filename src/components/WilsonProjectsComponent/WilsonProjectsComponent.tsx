import { useState } from "react";
import "./WilsonProjectsComponent.css";
import { motion } from "framer-motion";

interface WilsonProjectCardProps {
  name: string;
  link: string | null;
  dateRange: string;
  description: string;
  inspiration?: string;
  skills: string[];
  images: string[];
}


const WilsonProjectsComponent = () => {
  const [currentProject, setCurrentProject] = useState<string>("Campfire");

  const projects: {[index: string]: WilsonProjectCardProps} = {
    "Web Portfolio": {
      name: 'Wilson-Mak Portfolio',
      link: '',
      dateRange: 'Apr/23 - May/23',
      description: "The website your currently on.",
      skills: ['Howl.js', 'Node.js', 'Express.js', 'MongoDB', 'React.js', 'TypeScript', 'HTML', 'CSS', 'Websockets', 'AWS', 'Docker', 'nginx'],
      images: [],
      inspiration: 'Cool way to show off my works'
    },
    "Campfire": {
      name: 'Campfire Story (CSCC09)',
      link: '',
      dateRange: 'Jan/22 - Apr/22',
      description: "A web app that creates an immersive storytelling experience via realistic VR scenarios with autoplayed sound effects. A user can act as a narrator and create a lobby to invite other users to become the audience.",
      skills: ['Howl.js', 'Node.js', 'Express.js', 'MongoDB', 'React.js', 'TypeScript', 'HTML', 'CSS', 'Websockets', 'AWS', 'Docker', 'nginx'],
      images: [],
      inspiration: 'A cool way to tell stories with friends'
    },
    "Pintos": {
      name:'Pintos Operating Systems (CSCC69)',
      link:'',
      dateRange:'May/22 - Aug/22',
      description:"",
      skills:['C', 'Docker', 'QEMU', 'GDB'],
      images:[]
    },
    "PickEasy Rewards": {
      name:'PickEasy Rewards (CSCC01)',
      link:'',
      dateRange:'May/20 - Aug/20',
      description:"",
      skills:['Quasar', 'Vue', 'HTML', 'CSS', 'Javascript'],
      images:[]
    },
    "Shoop": {
      name:'Shoop (CSCB07)',
      link:'',
      dateRange:'Sep/19 - Dec/19',
      description:"",
      skills:['Java', 'Android Studio', 'Gradle', 'XML', 'SQLite'],
      images:[]
    }
  }

  const projectNames = Object.keys(projects);


  return (
    <div>
      <div className="project-container">
        <div className="project-inspiration-label">
          Inspiration
        </div>
        <div className="project-skills-label">
          Skills
        </div>
        <div className="project-selector-area">
            {projectNames.map((name, index) => (
              <div className="project-selector-option" key={index}>
                <span className="project-selector-option-date">{projects[name].dateRange}</span>
                <span onClick={() => {setCurrentProject(name)}} className={currentProject === name ? "project-selector-name-selected" : "project-selector-option-name"}>{name}</span>
              </div>
            ))}
        </div>
        <div className="projects-links-area">
          <p>{projects[currentProject].link}</p>
        </div>
        <div className="project-header-area">
          <h1>Projects</h1>
        </div>
        <div className="project-inspiration-area">
        <p>{projects[currentProject].inspiration}</p>
        </div>
        <div className="project-skills-area">
          {projects[currentProject].skills.map((skill, index) => (
              <div className='project-skill' key={index}>{skill}</div>
            ))}
        </div>
        <div className="project-description-area">
          <p>{projects[currentProject].description}</p>
        </div>
        <div className="project-image-area">
          The Image
        </div>
      </div>
    </div>
  )
}

export default WilsonProjectsComponent;
import "./WilsonProjectsComponent.css";
import { motion } from "framer-motion";

interface WilsonProjectCardProps {
  name: string;
  link: string | null;
  dateRange: string;
  description: string;
  technologies: string[];
  images: string[];
}

const WilsonProjectCard = ({name, link, dateRange, description, technologies, images} : WilsonProjectCardProps) => {
  return (
    <div className="project-card">
      <div>
        <h4>{name}</h4>
        <h5>{dateRange}</h5>
      </div>

      {/* <p>{description}</p> */}
      <ul className="project-card-technologies">
      {technologies.map((technology, i) => {
        return (
          <li key={i}>{technology}</li>
        )
      })}
      </ul>
    </div>
  )
}

const WilsonProjectsComponent = () => {
  const projects = [
    {
      name: 'Campfire Story (CSCC09)',
      link: '',
      dateRange: 'January 2022 - April 2022',
      description: "A web app that creates an immersive storytelling experience via realistic VR scenarios with autoplayed sound effects. A user can act as a narrator and create a lobby to invite other users to become the audience.",
      technologies: ['Howl.js', 'Node.js', 'Express.js', 'MongoDB', 'React.js', 'TypeScript', 'HTML', 'CSS', 'Websockets', 'AWS', 'Docker', 'nginx'],
      images: []
    },
    // {
    //   name:'Pintos Operating Systems (CSCC69)',
    //   link:'',
    //   dateRange:'May 2022 - August 2022',
    //   description:"",
    //   technologies:['C', 'Docker', 'QEMU', 'GDB'],
    //   images:[]
    // },
    {
      name:'PickEasy Rewards (CSCC01)',
      link:'',
      dateRange:'May 2020 - August 2020',
      description:"",
      technologies:['Quasar', 'Vue', 'HTML', 'CSS', 'Javascript'],
      images:[]
    },
    // {
    //   name:'Shoop (CSCB07)',
    //   link:'',
    //   dateRange:'Sept 2019 - Dec 2019',
    //   description:"",
    //   technologies:['Java', 'Android Studio', 'Gradle', 'XML', 'SQLite'],
    //   images:[]
    // }
  ]


  return (
    <div>
      <h1>Projects</h1>
      <div className="projects-flow">
      {projects.map((project, i) => {
        return (
          <WilsonProjectCard key={i} name={project.name} link={project.link} dateRange={project.dateRange} description={project.description} technologies={project.technologies} images={project.images}/>
        )
      })}  
      </div>
    </div>
  )
}

export default WilsonProjectsComponent;
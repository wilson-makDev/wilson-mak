import { useState } from "react";
import "./WilsonProjectsComponent.css";

interface ProjectIconLinkProps {
  iconName?: string;
  url?: string;
}

const ProjectIconLink = ({iconName, url}: ProjectIconLinkProps) => {
  const imgAddrFull = '/icons/' + iconName?.toLowerCase() + '.png';
  const size = "25rem";

  if (iconName === undefined || url === undefined) {
    return <div></div>;
  }
  
  return (<div>
    <a className="project-icon" href={url} target="_blank" rel="noreferrer">
      <img 
        src={imgAddrFull} alt={iconName}
        width={size}
        height={size}
      >
      </img>
    </a>
  </div>)
}

interface WilsonProjectCardProps {
  name: string;
  link?: ProjectIconLinkProps;
  dateRange: string;
  description: string;
  inspiration?: string;
  skills: string[];
  images: string[];
}


const WilsonProjectsComponent = () => {
  const [currentProject, setCurrentProject] = useState<string>("Campfire Stories");

  const projects: {[index: string]: WilsonProjectCardProps} = {
    "Web Portfolio": {
      name: 'Wilson-Mak Portfolio',
      dateRange: 'Apr/23 - May/23',
      description: "I designed this webpage to be simple and easy to navigate with responsive design in mind.",
      skills: ['React', 'Typescript','AWS-S3','AWS-CloudFront', 'Bootstrap', 'Framer Motion', "HTML", "CSS"],
      images: [],
      inspiration: 'Just a place to showcase some of my amazing career opportunities and some interesting projects of mine.'
    },
    "Pintos": {
      name:'Pintos Operating Systems (CSCC69)',
      dateRange:'May/22 - Aug/22',
      description:"One of my hardest course projects. This project made me a much better programmer and debugger. Lots of long nights planning, debugging and reading documentation to understand Pintos' large and complex system.",
      skills:['C++', 'Docker', 'QEMU', 'GDB', 'Teamwork'],
      images:[],
      inspiration: 'This was a class project where we had to implement OS features into an OS called Pintos.'
    },
    "Campfire Stories": {
      name: 'Campfire Story (CSCC09)',
      link: {iconName: "Github", url: "https://github.com/UTSCC09/project-dungeon-masters"},
      dateRange: 'Jan/22 - Apr/22',
      description: "A web app that creates an immersive storytelling experience via realistic VR scenarios with autoplayed sound effects based off the speech of the story teller. A user can act as a narrator and create a lobby to invite other users to become the audience. My role was in building the backend, which handled sound processing, speech to text, websockets, authentication and creating CRUD endpoints for account and lobby management.",
      skills: ['Howl.js', 'Node.js', 'Express.js', 'MongoDB', 'React.js', 'TypeScript', 'HTML', 'CSS', 'Websockets', 'AWS', 'Docker', 'nginx', 'Teamwork', 'APIs'],
      images: [],
      inspiration: 'With the rise of powerful language process AI, I wanted to build a new way to tell stories to friends and family.'
    },
    "PickEasy Rewards": {
      name:'PickEasy Rewards (CSCC01)',
      dateRange:'May/20 - Aug/20',
      description:"Over the course of many sprints, involving meetings with business stakeholders, standup meetings and sprint planning meetings, my team and I built multi-platform app that gamified food ordering through tracking purchases and awarding rewards based on different qualifiers.",
      skills:['Quasar', 'Vue', 'HTML', 'CSS', 'Javascript', 'Teamwork', 'scrum', 'System Design', 'UML'],
      images:[],
      inspiration: 'A project for my software engineering course that deeply immersed my teammates and I into the agile methodology, scrum, and required quick learning of new frameworks to build a fully functioning app.'
    },
    "Shoop": {
      name:'Shoop (CSCB07)',
      dateRange:'Sep/19 - Dec/19',
      description:"A grocery ordering app built for the Android phone. I created the general system design and implemented the backend which handled serializing and deserializing user data, process data from the database and business logic.",
      skills:['Java', 'Android Studio', 'Gradle', 'XML', 'SQLite', 'Teamwork', 'UML', 'System Design', 'APIs'],
      images:[],
      inspiration: "A course project that introduced me to software design."
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
        <div className="project-links-area">
          <ProjectIconLink iconName={projects[currentProject].link?.iconName} url={projects[currentProject].link?.url}></ProjectIconLink>
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
      </div>
    </div>
  )
}

export default WilsonProjectsComponent;
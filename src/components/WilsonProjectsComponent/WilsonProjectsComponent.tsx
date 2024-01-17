import { useState } from "react";
import "./WilsonProjectsComponent.css";
import DOMPurify from "dompurify";

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
  idea?: string;
  skills: string[];
  images: string[];
}


const WilsonProjectsComponent = () => {
  const [currentProject, setCurrentProject] = useState<string>("HistoMovie");

  const projects: {[index: string]: WilsonProjectCardProps} = {
    "HistoMovie": {
      name: 'HistoMovie - In Development',
      dateRange: 'Dec/2023 - Present',
      description: `Implementing backend API endpoints using <b>Express</b> and <b>GraphQL</b> to handle <b>CRUD requests</b> using <b>asynchronous code</b> internally
                    <br/>
                    <br/>
                    Utilized <b>ChatGPT-3.5 API, Python and Pandas library</b> to categorize thousands of movie plots by century and location to allow for <b>efficient querying</b> of movie data
                    <br/>
                    <br/>
                    Generated <b>MSSQL</b> database schema to store movie and user data to allow for <b>persistence</b> across all sessions, and interacted with MSSQL database hosted in Docker using <b>Prisma ORM</b> in Node.js
                    `,
      skills: ['OpenAI', 'ChatGPT-3.5', 'Express', 'Node.js', 'Middleware', 'GraphQL', 'RESTFul API', 'MSSQL', 'Typescript', 'Docker', 'Prisma', 'Python', 'Pandas'],
      images: [],
      idea: 'As an avid fan of history and historical dramas, I always found it a bit difficult to find movies and tv-shows whose plot related to time periods and locations I was interested in. Thus I am developing HistoMap, a resource and web app to search for video content whose plots have been categorized by time period and location to make it easier for historybuffs to search for media that relates with their favorite parts of history.'
    },
    "Broke": {
      name: 'Expense Tracking App',
      dateRange: 'Sep/2023',
      description: `Rapidly learned <b>Swift, SwiftUI and Coredata</b> through documentation, online lectures and developer forums in order to develop a full featured expense tracking app
                    <br/>
                    <br/>
                    Applied <b>MVVM</b> design pattern to <b>separate presentation logic from application business logic</b> to improve maintainability and development of additional features
                    <br/>
                    <br/>
                    Utilized <b>Coredata to model</b> expenditure and category data to allow for <b>persistence</b> of expenditures and categorization of expenditures on users device
                    <br/>
                    <br/>
                    Implemented form to allow user to input expenditure data, with ability to color customise expenditure cards via categories when viewed in a list
                    `,
      skills: ['Swift', 'SwiftUI', 'CoreData', 'Xcode', 'MVVM', 'Git'],
      images: [],
      idea: 'A simple to use expense tracking app for IOS devices that allows users to categorize and visualize their expenses in custom color coded categories.'
    },
    "Web Portfolio": {
      name: 'Wilson-Mak Portfolio',
      dateRange: 'Sep/2020 - Present',
      description: `Utilized React to create a <b>responsive</b> and <b>easy to navigate</b> webpage to showcase my projects and career opportunities
                    <br/>
                    <br/>
                    Deployed on AWS using a <b>CI/CD pipeline</b> to allow for <b>quick and easy updates</b> to the webpage
                    <br/>
                    <br/>
                    Version controlled using <b>Git</b> and <b>Github</b>
                    `,
      skills: ['React', 'Typescript','AWS-S3','AWS-CloudFront', 'CI/CD', 'AWS CodeBuild', 'AWS CodePipeline','Bootstrap', 'Framer Motion', "HTML", "CSS", "Github"],
      images: [],
      idea: 'Just a place to showcase some of my amazing career opportunities and some interesting projects of mine. I designed this webpage to be simple and easy to navigate with responsive design in mind. Deployed on AWS using a CI/CD pipeline.'
    },
    "Campfire Stories": {
      name: 'Campfire Story (CSCC09)',
      link: {iconName: "Github", url: "https://github.com/UTSCC09/project-dungeon-masters"},
      dateRange: 'Jan/22 - Apr/22',
      description: `Developed <b>RESTful API and GraphQL</b> endpoints in Node.js and Express to handle <b>CRUD requests</b> using <b>asynchronous code</b> internally
                    <br/>
                    <br/>
                    Utilized <b>middleware</b> to <b>authenticate</b> users, <b>encrypting sensitive data</b> in backend and <b>maintain sessions using cookies</b>
                    <br/>
                    <br/>
                    Integrated <b>web sockets</b> and audio JavaScript library into <b>React</b> frontend to broadcast and <b>cache multiple</b> sound effects, improving efficiency and enhancing the user experience
                    <br/>
                    <br/>
                    Querying <b>MongoDB</b> database to store user and app chat room information to allow for <b>persistence</b> across all sessions`,
      skills: ['Howler.js', 'Node.js', 'Express.js', 'MongoDB', 'React.js', 'TypeScript', 'HTML', 'CSS', 'Websockets', 'AWS', 'Docker', 'nginx', 'Teamwork', 'APIs'],
      images: [],
      idea: 'A web app that creates an immersive storytelling experience via realistic VR scenarios with autoplayed sound effects based off the speech of the story teller. A user can act as a narrator and create a lobby to invite other users to become the audience. My role was in building the backend, which handled sound processing, speech to text, websockets, authentication and creating CRUD endpoints for account and lobby management.'
    },
    "PickEasy Rewards": {
      name:'PickEasy Rewards (CSCC01)',
      dateRange:'May/20 - Aug/20',
      description:"Over the course of many sprints, involving meetings with business stakeholders, standup meetings and sprint planning meetings, my team and I built multi-platform app that gamified food ordering through tracking purchases and awarding rewards based on different qualifiers.",
      skills:['Quasar', 'Vue', 'HTML', 'CSS', 'Javascript', 'Teamwork', 'scrum', 'System Design', 'UML'],
      images:[],
      idea: 'A project for my software engineering course that deeply immersed my teammates and I into the agile methodology, scrum, and required quick learning of new frameworks to build a fully functioning app.'
    }
  }

  const projectNames = Object.keys(projects);


  return (
    <div>
      <div className="project-container">
        <div className="project-inspiration-label">
          Idea
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
        <p>{projects[currentProject].idea}</p>
        </div>
        <div className="project-skills-area">
          {projects[currentProject].skills.map((skill, index) => (
              <div className='project-skill' key={index}>{skill}</div>
            ))}
        </div>
        <div className="project-description-area">
          <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(projects[currentProject].description)}}></p>
        </div>
      </div>
    </div>
  )
}

export default WilsonProjectsComponent;
import { useState } from "react";
import { motion } from "framer-motion";
import "./WilsonProjectsComponent.scss";
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
      link: {iconName: "Github", url: "https://github.com/wilson-makDev/Broke"},
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
      link: {iconName: "Github", url: "https://github.com/wilson-makDev/wilson-mak"},
      dateRange: 'Sep/2020 - Present',
      description: `Utilized React to create a <b>responsive</b> and <b>easy to navigate</b> webpage to showcase my projects and career opportunities
                    <br/>
                    <br/>
                    Deployed on AWS using a <b>CI/CD pipeline</b> to allow for <b>quick and easy updates</b> to the webpage
                    <br/>
                    <br/>
                    Version controlled using <b>Git</b> and <b>Github</b>
                    `,
      skills: ['React', 'Typescript','AWS-S3','AWS-CloudFront', 'CI/CD', 'AWS CodeBuild', 'AWS CodePipeline','Bootstrap', 'Framer Motion', "HTML", "SASS/SCSS", "Github"],
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
      description:`Designed and implemented dozens of features outlined in <b>user stories</b> using the Quasar framework and Vue.js
                  <br/>
                  <br/>
                  Collaborated with <b>scrum team of 8</b> in <b>daily stand-ups</b> and <b>business stakeholders</b> to address bug fixes and feature implementations over the course of several week long <b>sprints</b>
                  <br/>
                  <br/>
                  Applied <b>software development patterns</b> and <b>object-oriented principals</b> to improve organization, modularity, and reusability
                  <br/>
                  <br/>
                  Implemented user interfaces for <b>mobile devices</b> to enhance <b>touch-based interactions</b>      
                  `,
      skills:['Quasar', 'Vue', 'HTML', 'CSS', 'Javascript', 'Scrum', 'System Design', 'Agile', 'Mobile Design', 'Design Patterns','UML Designing', 'Github', 'Trello'],
      images:[],
      idea: 'A project for my software engineering course that deeply immersed my teammates and I into the agile methodology, scrum, and required quick learning of new frameworks to build a fully functioning app.'
    },
    "Class Management": {
      name:'Class Management (CSCB20)',
      dateRange:'Jan/20 - Apr/20',
      description:`Designed and implemented <b>relational database schemas</b> in <b>SQLite</b> to organize student, class and teacher information to efficiently maintain and query over <b>200 entries</b>
                  <br/>
                  <br/>
                   Developed <b>RESTful API</b> calls using <b>Python</b> in <b>Flask</b> framework to query, and push data entries receiving full scores for the implementation
                   <br/>
                   <br/>
                   Collaborated with partner in weekly meetings and through <b>git</b> source control to manage and maintain bug fixes and feature implementations
                   <br/>
                   <br/>
                   Utilized <b>Flask</b> and <b>Jinja2</b> to create modular reusable HTML, CSS code and interact with the database
                  `,
      skills:['Python', 'Flask', 'HTML', 'CSS', 'Javascript', 'System Design', 'SQL', 'RESTful API', 'Git', 'Github'],
      images:[],
      idea: 'A project for my intro to web development course that had us design and implement a database and Flask based website to manage school data.'
    },
    "Shoop Shopping": {
      name:'Grocery Store App (CSCB07)',
      dateRange:'Sep/19 - Dec/19',
      description:`Collaborated in a <b>small group of 5</b> to create an <b>android mobile app</b> that can store and track items of a store, alongside other features such as adding new customers and promoting employees
                  <br/>
                  <br/>
                  Applied <b>software development patterns</b> and <b>object-oriented programming</b>, skills to improve organization, modularity and reusability
                  <br/>
                  <br/>
                  Utilized <b>Java</b> and <b>Oracle Database</b> to store, access, modify and remove data
      `,
      skills:['Java', 'Oracle Database', 'Android Studios', 'Design Patterns', 'OOP', 'System Design'],
      images:[],
      idea: 'A project for my software development course where we designed and created a java android app to shop for groceries and allow users to save and store their carts.'
    }
  }

  const projectNames = Object.keys(projects);


  return (
    <motion.div className="project-container"
          initial={{ scale: 0.90 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{once: true}}
          layout
    >
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
              <span onClick={() => {setCurrentProject(name)}} className={currentProject === name ? "project-selector-option-name-selected" : "project-selector-option-name"}>{name}</span>
            </div>
          ))}
      </div>
      <div className="project-links-area">
        <ProjectIconLink iconName={projects[currentProject].link?.iconName} url={projects[currentProject].link?.url}></ProjectIconLink>
      </div>
      <div className="project-header-area">
        <h1>Projects</h1>
      </div>
      <div className="project-inspiration-area scrollable">
      <p>{projects[currentProject].idea}</p>
      </div>
      <div className="project-skills-area">
        {projects[currentProject].skills.map((skill, index) => (
            <div className='project-skill' key={index}>{skill}</div>
          ))}
      </div>
      <div className="project-description-label">
        Description
      </div>
      <div className="project-description-area scrollable">
        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(projects[currentProject].description)}}></p>
      </div>
    </motion.div>
  )
}

export default WilsonProjectsComponent;
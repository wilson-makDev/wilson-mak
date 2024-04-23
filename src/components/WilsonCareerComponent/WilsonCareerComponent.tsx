import { useState } from 'react';
import './WilsonCareerComponent.scss';
import { motion } from 'framer-motion';

interface WilsonCareerCardProps {
  position: string;
  company: string;
  dateRange: string;
  description: string[];
  skills: string[];
}

const WilsonCareerComponent = () => {
  const [career, setCareer] = useState('VS');

  const displayNames = ["VS","UHN", "OPS"];

  const content: {[index:string]: WilsonCareerCardProps} = {
    "VS":{
      position:'Software Engineer',
      company:'Volante Systems - V7 Team',
      dateRange:'April 2024 - Present',
      description:[
        'WORK IN PROGRESS'
      ],
      skills:[]
    },
    "UHN":{
      position:'Full-Stack Team Lead and Python Developer (Intern)',
      company:'University Health Network - Kidney Health Education and Research Group',
      dateRange:'Sep 2021 - Dec 2021',
      description:[
        'Implemented a PHP-based templating and component system that significantly improved the efficiency of creating over 30 new web pages, streamlining the development process',
        'Successfully led and delegated work to a team of 5 in the maintenance, revamping of UI, and implementation of features across multiple company websites',
        'Utilized Python and SQL to maintain a daily automated emailing system that efficiently queried data to identify hundreds of patients requiring notification and provision of the appropriate questionnaires',
        'Designed internal bug transparency system that automatically ran tests and through Teamworks API calls would create a job ticket if a failure was detected'
      ],
      skills:['PHP', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Teamworks API']
    },
    "OPS": {
      position:'Software Developer (Intern)',
      company:'Ministry of Education - Ontario Public Services',
      dateRange:'Sep 2020 - Apr 2021',
      description:[
        'Delivered a useable end product through the agile methodology, which included weekly sprint meetings with both business and development team members, in over 100 sprints',
        'Utilized Angular framework pipes and services to implement features that efficiently filtered and sorted hundreds of data entries from REST API calls hosted in SharePoint, improving data organization and accessibility',
        'Developed over 70 unit test suites using the Jasmine and Karma frameworks to ensure thorough coverage and effective, bug-free operation of all components and services',
        'Collaborated through Azure DevOps and git source control to manage and maintain files and user stories throughout the development process, including dozens of releases leading up to and following the launch'
      ],
      skills:['Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'Jasmine', 'Karma', 'Azure DevOps', 'Git']
    }
  }

  return (
    <motion.div className="career-container"
        initial={{ scale: 0.90 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{once: true}}
    >
      <div className="job-selector-area">
        <h1>Career @</h1>
        <div className='job-selector-options'>
          {displayNames.map((displayName, index) => (
            <h2 onClick={() => {setCareer(displayName)}} className={career === displayName ? "job-option-selected" : 'job-option'} key={index}>
              {displayName}
              {career === displayName ? (
                <motion.div
                  transition={{ duration: 0.25 }}
                  className='underline' layoutId="underline"></motion.div>
              ) : null}
            </h2>
          ))}
        </div>
      </div>
      <motion.div className="job-description-area scrollable">
        {content[career].description.map((description, index) => (
            <div key={index}>
              <p>
                {description}
              </p>
            </div>
          ))}
      </motion.div>

      <div className="job-date-area">
        <p>{content[career].dateRange}</p>
      </div>
      <div className="job-position-area">
        <p>{content[career].position}</p>
      </div>
      <div className="job-company-area">
        <p>{content[career].company}</p>
      </div>

      <div className="job-skills-area">
          {content[career].skills.map((skill, index) => (
            <div className='job-skill' key={index}>{skill}</div>
          ))}
      </div>

      <div className="job-date-label">
        <p>Date</p>
      </div>
      <div className="job-position-label">
        <p>Position</p>
      </div>
      <div className="job-company-label">
        <p>Company</p>
      </div>

      <div className="job-skills-label">
        <p>Skills</p>
      </div>
    </motion.div>
  )
}

export default WilsonCareerComponent;
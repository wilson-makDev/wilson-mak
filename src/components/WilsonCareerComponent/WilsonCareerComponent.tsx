import './WilsonCareerComponent.css';

interface WilsonCareerCardProps {
  position: string;
  company: string;
  dateRange: string;
  contents: string[];
}

const WilsonCareerCard = ({position, company, dateRange, contents}: WilsonCareerCardProps) => {
  return (
    <div>
      <h2>{position}</h2>
      <h3>{company}</h3>
      <h4>{dateRange}</h4>
      <ul>
        {contents.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </div>
  )
}

const WilsonCareerComponent = () => {
  return (
    <div>
      <h1>Career</h1>

      <WilsonCareerCard 
        position='Full-Stack Team Lead and Python Developer (Intern)' 
        company='University Health Network - Kidney Health Education and Research Group'
        dateRange='Sep 2021 - Dec 2021'
        contents={[
          'Implemented a PHP-based templating and component system that significantly improved the efficiency of creating over 30 new web pages, streamlining the development process',
          'Successfully led and delegated work to a team of 5 in the maintenance, revamping of UI, and implementation of features across multiple company websites',
          'Utilized Python and SQL to maintain a daily automated emailing system that efficiently queried data to identify hundreds of patients requiring notification and provision of the appropriate questionnaires',
          'Designed internal bug transparency system that automatically ran tests and through Teamworks API calls would create a job ticket if a failure was detected'
        ]}
        ></WilsonCareerCard>

      <br></br>

      <WilsonCareerCard 
        position='Software Developer (Intern)' 
        company='Ministry of Education - Ontario Public Services'
        dateRange='Sep 2020 - Apr 2021'
        contents={[
          'Delivered a useable end product through the agile methodology, which included weekly sprint meetings with both business and development team members, in over 100 sprints',
          'Utilized Angular framework pipes and services to implement features that efficiently filtered and sorted hundreds of data entries from REST API calls hosted in SharePoint, improving data organization and accessibility',
          'Developed over 70 unit test suites using the Jasmine and Karma frameworks to ensure thorough coverage and effective, bug-free operation of all components and services',
          'Collaborated through Azure DevOps and git source control to manage and maintain files and user stories throughout the development process, including dozens of releases leading up to and following the launch'
        ]}
        ></WilsonCareerCard>

      <br></br>

    </div>
  )
}

export default WilsonCareerComponent;
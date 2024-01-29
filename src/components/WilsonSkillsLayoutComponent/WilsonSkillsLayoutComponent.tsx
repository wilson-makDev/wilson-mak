import './WilsonSkillsLayoutComponent.scss';
import SkillHighlightMenuComponent from '../SkillHighlightMenuComponent/SkillHighlightMenuComponent';
import { useState } from 'react';

interface TechSnapshotProperties {
  name: string;
  group: string;
}

const WilsonSkillsLayoutComponent = () => {
  const [hoverState, setHoverState] = useState('Frameworks');

  const techsUsed : TechSnapshotProperties[] = [
    {name: "Angular", group: "Frameworks"},
    {name: "React", group: "Frameworks"},
    {name: "Node.js", group: "Frameworks"},
    {name: "Express", group: "Frameworks"},
    {name: "MongoDB", group: "Databases"},
    {name: "MySQL", group: "Databases"},
    {name: "Python", group: "Languages"},
    {name: "Java", group: "Languages"},
    {name: "C++", group: "Languages"},
    {name: "C", group: "Languages"},
    {name: "JavaScript", group: "Languages"},
    {name: "TypeScript", group: "Languages"},
    {name: "Git", group: "Tools"},
    {name: "Github", group: "Tools"},
    {name: "Docker", group: "Tools"},
    {name: "AWS", group: "Tools"},
    {name: "AWS-CloudFront", group: "Tools"},
    {name: "Agile", group: "Interpersonal"},
    {name: "Scrum", group: "Interpersonal"},
    {name: "SASS", group: "Languages"},
    {name: "CSS", group: "Languages"},
    {name: "HTML", group: "Languages"},
    {name: "GraphQL", group: "Tools"},
    {name: "RESTful API", group: "Tools"},
    {name: "PHP", group: "Languages"},
    {name: "AWS CodeBuild", group: "Tools"},
    {name: "AWS CodePipeline", group: "Tools"},
  ];


  return (
      <div className="skills-container">
        <h5 className='skills-header'>My areas of experience</h5>
        <div className="group-selector-area">
          <SkillHighlightMenuComponent onHover={(groupName: string) => {setHoverState(groupName)}} hoverState={hoverState}></SkillHighlightMenuComponent>
        </div>
        <div className="skills-area">
          {techsUsed.map(({name, group}, index) => (
            <div className={hoverState === group ? 'skill-badge-selected' : 'skill-badge'} key={index}>{name}</div>
          ))}
        </div>
      </div>
  )
}

export default WilsonSkillsLayoutComponent;
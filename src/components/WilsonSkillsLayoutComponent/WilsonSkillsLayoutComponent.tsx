import './WilsonSkillsLayoutComponent.css';
import SkillHighlightMenuComponent from '../SkillHighlightMenuComponent/SkillHighlightMenuComponent';
import { useState } from 'react';

interface TechSnapshotProperties {
  name: string;
  rank: number;
  group: string;
}

const WilsonSkillsLayoutComponent = () => {
  const [hoverState, setHoverState] = useState('Frameworks');

  const techsUsed : TechSnapshotProperties[] = [
    {name: "Angular", rank: 1, group: "Frameworks"},
    {name: "React", rank: 2, group: "Frameworks"},
    {name: "Node.js", rank: 3, group: "Frameworks"},
    {name: "Express", rank: 4, group: "Frameworks"},
    {name: "MongoDB", rank: 5, group: "Databases"},
    {name: "MySQL", rank: 6, group: "Databases"},
    {name: "Python", rank: 7, group: "Languages"},
    {name: "Java", rank: 8, group: "Languages"},
    {name: "C++", rank: 9, group: "Languages"},
    {name: "C", rank: 10, group: "Languages"},
    {name: "JavaScript", rank: 11, group: "Languages"},
    {name: "TypeScript", rank: 12, group: "Languages"},
    {name: "Git", rank: 13, group: "Tools"},
    {name: "Github", rank: 13, group: "Tools"},
    {name: "Docker", rank: 14, group: "Tools"},
    {name: "AWS", rank: 15, group: "Tools"},
    {name: "Agile", rank: 16, group: "Interpersonal"},
    {name: "Scrum", rank: 16, group: "Interpersonal"},
    {name: "SASS", rank: 16, group: "Languages"},
    {name: "CSS", rank: 16, group: "Languages"},
    {name: "HTML", rank: 16, group: "Languages"},
    {name: "GraphQL", rank: 16, group: "Tools"},
    {name: "RESTful API", rank: 16, group: "Tools"},
    {name: "PHP", rank: 16, group: "Languages"},
  ];


  return (
      <div className="skills-container">
        <h5 className='skills-header'>My areas of experience</h5>
        <div className="group-selector-area">
          <SkillHighlightMenuComponent onHover={(groupName: string) => {setHoverState(groupName)}} hoverState={hoverState}></SkillHighlightMenuComponent>
        </div>
        <div className="skills-area">
          {techsUsed.map(({name, rank, group}, index) => (
            <div className={hoverState === group ? 'skill-badge-selected' : 'skill-badge'} key={index}>{name}</div>
          ))}
        </div>
      </div>
  )
}

export default WilsonSkillsLayoutComponent;